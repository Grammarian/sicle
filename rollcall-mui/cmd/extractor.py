# pip install openpyxl
# pip install cuid
import os.path
import json
import datetime

from openpyxl import load_workbook
import cuid  # https://github.com/necaris/cuid.py - create uuid's in the format that graphcool expects


SOURCE_XLSX = "./CLP-DATAEXTRACT.xlsx"
SCHOOL_TITLES = ["ORGANISATION_ID", "ORGANISATION_NAME", "ORG_ELECTORATE", "P_ADDRESS1", "P_SUBURB", "P_STATE",
                 "P_POSTCODE", "S_ADDRESS1", "S_SUBURB", "S_STATE", "S_POSTCODE", "SCHOOL_NAME", "SCH_ELECTORATE",
                 "SCHOOL_ID", "SCHOOL_P_ADDRESS1",
                 "SCHOOL_P_SUBURB", "SCHOOL_P_STATE", "SCHOOL_P_POSTCODE", "SCHOOL_S_ADDRESS1", "SCHOOL_S_SUBURB",
                 "SCHOOL_S_STATE", "SCHOOL_S_POSTCODE", "LOCATION_NAME", "LOC_ELECTORATE", "LOC_S_ADDRESS1",
                 "LOC_S_SUBURB", "LOC_S_STATE", "LOC_S_POSTCODE"]
ORGANISATION_FIELDS = {"ORGANISATION_ID": "CLS_ORGANISATION_ID", "ORGANISATION_NAME": "NAME",
                       "ORG_ELECTORATE": "ELECTORATE", "S_ADDRESS1": "ADDRESS", "S_SUBURB": "SUBURB",
                       "S_STATE": "STATE", "S_POSTCODE": "POSTCODE", }
SCHOOL_FIELDS = {"SCHOOL_NAME": "NAME", "SCH_ELECTORATE": "ELECTORATE", "SCHOOL_ID": "CLS_SCHOOL_ID",
                 "ORGANISATION_ID": "CLS_ORGANISATION_ID",
                 "SCHOOL_S_ADDRESS1": "ADDRESS", "SCHOOL_S_SUBURB": "SUBURB", "SCHOOL_S_STATE": "STATE",
                 "SCHOOL_S_POSTCODE": "POSTCODE", }
LOCATION_FIELDS = {"LOCATION_NAME": "NAME", "LOC_ELECTORATE": "ELECTORATE", "SCHOOL_ID": "CLS_SCHOOL_ID",
                   "LOC_S_ADDRESS1": "ADDRESS", "LOC_S_SUBURB": "SUBURB", "LOC_S_STATE": "STATE",
                   "LOC_S_POSTCODE": "POSTCODE"}
TEACHER_TITLES = ["TEACHER_ID", "ORGANISATION_NAME", "SCHOOL_NAME", "TEACHER_NAME", "LNAME", "FNAME",
                  "TEACHER_LANGUAGES", "P_ADDRESS1", "P_ADDRESS2", "P_SUBURB", "P_STATE", "P_POSTCODE",
                  "ORGANISATION_ID", "SCHOOL_ID"]
STUDENT_TITLES = ["SCHOOL_NAME", "SCHOOL_ID", "STUDENT_ID", "LOCATION_NAME",
                  "STUDENT_LNAME", "STUDENT_FNAME", "DOB", "TEL", "LOCATION_NAME_1"]
TEACHER_FIELDS = {"TEACHER_ID": "CLS_TEACHER_ID", "ORGANISATION_NAME": "ORGANISATION_NAME",
                  "SCHOOL_NAME": "SCHOOL_NAME", "TEACHER_NAME": "NAME",
                  "LNAME": "FAMILY_NAME", "FNAME": "GIVEN_NAMES", "TEACHER_LANGUAGES": "LANGUAGES",
                  "ORGANISATION_ID": "ORGANISATION_ID", "SCHOOL_ID": "SCHOOL_ID", }
STUDENT_FIELDS = {"SCHOOL_NAME": "SCHOOL_NAME", "SCHOOL_ID": "SCHOOL_ID", "STUDENT_ID": "CLS_STUDENT_ID",
                  "LOCATION_NAME": "LOCATION",
                  "STUDENT_LNAME": "FAMILY_NAME", "STUDENT_FNAME": "GIVEN_NAMES", "DOB": "DOB",
                  "TEL": "TEL", "LOCATION_NAME_1": "DAY_SCHOOL", }


class Sheet:
    def __init__(self, name, titles=None, rows=None):
        self.name = name
        self.titles = titles or []
        self.rows = rows or []


def convert_row_to_dict(titles, row):
    data = {}
    for (i, cell) in enumerate(row):
        data[titles[i]] = str(cell.value)
    return data


def convert_xlsx(xlsx_file):
    """Convert the given XLSX spreadsheet to iterable of Sheet objects,
    in which row has been converted into a dictionary"""
    wb = load_workbook(filename=xlsx_file, read_only=True, data_only=True)
    for sheet in wb:
        rows = [x for x in sheet.iter_rows()]
        if rows:
            titles = [cell.value for cell in rows[0]]
            dicts = [convert_row_to_dict(titles, row) for row in rows[1:]]
            yield Sheet(sheet.title, titles, dicts)
        else:
            yield Sheet(sheet.title)


def to_camel(s):
    bits = [(x.lower() if i == 0 else x.title())
            for (i, x) in enumerate(s.split("_"))]
    return "".join(bits)


def path_to_xlsx():
    path_to_py = os.path.abspath(os.path.dirname(__file__))
    return os.path.join(path_to_py, SOURCE_XLSX)


def is_title_row(titles, row):
    return all(x.value == titles[i] for (i, x) in enumerate(row))


def extract(fields, row_as_dict):
    data = {}
    for (k, v) in fields.items():
        data[to_camel(v)] = row_as_dict[k]
    return data


def process_sheet(sheet, titles, field_defns):
    rows = [x for x in sheet.iter_rows()]
    if not is_title_row(titles, rows[0]):
        print("Sheet doesn't have expected titles")
        return []

    dicts = [convert_row_to_dict(titles, row) for row in rows[1:]]
    structs = [[extract(defn, x) for x in dicts] for defn in field_defns]
    return structs


def unique(key, dicts):
    t = {}
    for x in dicts:
        t[x[key]] = x
    return t.values()


def now_as_iso8601():
    return datetime.datetime.now().replace(microsecond=0).isoformat() + "Z"


def inject_required(type_name, dicts):
    # Inject the required fields that graphcool import required
    for x in dicts:
        x["_typeName"] = type_name
        x["id"] = cuid.cuid()
        x["createdAt"] = x["updatedAt"] = now_as_iso8601()
    return list(dicts)


def prepare_organisations(organisations):
    unique_orgs = unique("clsOrganisationId", organisations)
    fat_orgs = inject_required("ClpOrganisation", unique_orgs)
    return fat_orgs


def prepare_schools(schools):
    uniques = unique("clsSchoolId", schools)
    injected = inject_required("ClpSchool", uniques)
    return injected


def prepare_locations(locations):
    # There are multiple locations, each of which is identitical except that for being related to a different school.
    # We have to collect all the schools that meet at the same location.
    uniques = {}
    for x in locations:
        # get an existing location with the given name, or add the new location
        location = uniques.setdefault(x["name"], x)
        related_schools = location.setdefault("schools", set())
        related_schools.add(x["clsSchoolId"])
    injected = inject_required("ClpSchool", uniques.values())
    return injected


def prepare_students(students):
    uniques = unique("clsStudentId", students)
    injected = inject_required("ClpStudent", uniques)
    return injected


def prepare_teachers(teachers):
    uniques = unique("clsTeacherId", teachers)
    injected = inject_required("ClpTeacher", uniques)
    return injected


def extract_from_xlsx():
    work_book = load_workbook(filename=path_to_xlsx(), data_only=False)
    for sheet in work_book:
        if sheet.title == "SCHOOL-ORG":
            (organisations, schools, locations) = process_sheet(
                sheet, SCHOOL_TITLES, [ORGANISATION_FIELDS, SCHOOL_FIELDS, LOCATION_FIELDS])
        elif sheet.title == "TEACHER":
            (teachers, ) = process_sheet(
                sheet, TEACHER_TITLES, [TEACHER_FIELDS])
        elif sheet.title == "STUDENT":
            (students, ) = process_sheet(
                sheet, STUDENT_TITLES, [STUDENT_FIELDS])
        else:
            print("Ignoring sheet:", sheet.title)
    return (organisations, schools, locations, teachers, students)


def main():
    (organisations, schools, locations, teachers, students) = extract_from_xlsx()
    data = {
        "organisations": prepare_organisations(organisations),
        "schools": prepare_schools(schools),
        "locations": prepare_locations(locations),
        "teachers": prepare_teachers(teachers),
        "students": prepare_students(students)
    }
    print(json.dumps(data))


if __name__ == "__main__":
    main()
