from openpyxl import load_workbook
import os.path
import json

SOURCE_XLSX = "./CLP-DATAEXTRACT.xlsx"
SCHOOL_TITLES = ["ORGANISATION_ID", "ORGANISATION_NAME", "ORG_ELECTORATE", "P_ADDRESS1", "P_SUBURB", "P_STATE", "P_POSTCODE", "S_ADDRESS1", "S_SUBURB", "S_STATE", "S_POSTCODE", 
    "SCHOOL_NAME", "SCH_ELECTORATE", "SCHOOL_ID", "SCHOOL_P_ADDRESS1", "SCHOOL_P_SUBURB", "SCHOOL_P_STATE", "SCHOOL_P_POSTCODE", "SCHOOL_S_ADDRESS1", "SCHOOL_S_SUBURB", "SCHOOL_S_STATE", "SCHOOL_S_POSTCODE", 
    "LOCATION_NAME", "LOC_ELECTORATE", "LOC_S_ADDRESS1", "LOC_S_SUBURB", "LOC_S_STATE", "LOC_S_POSTCODE"]
ORGANISATION_FIELDS = {
    "ORGANISATION_ID": "ID", "ORGANISATION_NAME": "NAME", "ORG_ELECTORATE": "ELECTORATE", "S_ADDRESS1": "ADDRESS", "S_SUBURB": "SUBURB", "S_STATE": "STATE", "S_POSTCODE": "POSTCODE",
}
SCHOOL_FIELDS = {
   "SCHOOL_NAME": "NAME", "SCH_ELECTORATE": "ELECTORATE", "SCHOOL_ID": "ID", "SCHOOL_S_ADDRESS1": "ADDRESS", "SCHOOL_S_SUBURB": "SUBURB", "SCHOOL_S_STATE": "STATE", "SCHOOL_S_POSTCODE": "POSTCODE", 
}
LOCATION_FIELDS = {
    "LOCATION_NAME": "NAME", "LOC_ELECTORATE": "ELECTORATE", "LOC_S_ADDRESS1": "ADDRESS", "LOC_S_SUBURB": "SUBURB", "LOC_S_STATE": "STATE", "LOC_S_POSTCODE": "POSTCODE"
}
TEACHER_TITLES = ["TEACHER_ID", "ORGANISATION_NAME", "SCHOOL_NAME", "TEACHER_NAME", "LNAME", "FNAME", "TEACHER_LANGUAGES", "P_ADDRESS1", "P_ADDRESS2", "P_SUBURB", "P_STATE", "P_POSTCODE", "ORGANISATION_ID", "SCHOOL_ID"]
STUDENT_TITLES = ["SCHOOL_NAME", "SCHOOL_ID", "STUDENT_ID", "LOCATION_NAME", "STUDENT_LNAME", "STUDENT_FNAME", "DOB", "TEL", "LOCATION_NAME_1"]
TEACHER_FIELDS = {"TEACHER_ID": "ID", "ORGANISATION_NAME": "ORGANISATION_NAME", "SCHOOL_NAME": "SCHOOL_NAME", "TEACHER_NAME": "NAME", "LNAME": "LAST_NAME", "FNAME": "FIRST_NAME", "TEACHER_LANGUAGES": "LANGUAGES", "ORGANISATION_ID": "ORGANISATION_ID", "SCHOOL_ID": "SCHOOL_ID",}
STUDENT_FIELDS = {"SCHOOL_NAME": "SCHOOL_NAME", "SCHOOL_ID": "SCHOOL_ID", "STUDENT_ID": "ID", "LOCATION_NAME": "LOCATION_NAME", "STUDENT_LNAME": "LAST_NAME", "STUDENT_FNAME": "FIRST_NAME", "DOB": "DOB", "TEL": "TEL", "LOCATION_NAME_1": "LOCATION",}


def to_camel(s):
    bits = [(x.lower() if i == 0 else x.title()) for (i,x) in enumerate(s.split("_"))]
    return "".join(bits) 

def path_to_xlsx():
    path_to_py = os.path.abspath(os.path.dirname(__file__))
    return os.path.join(path_to_py, SOURCE_XLSX)


def is_title_row(titles, row):
    return all(x.value == titles[i] for (i, x) in enumerate(row))


def convert_row_to_dict(titles, row):
    data = {}
    for (i,cell) in enumerate(row):
        data[titles[i]] = cell.value
    return data

def extract(fields, rowAsDict):
    data = {}
    for (k,v) in fields.items():
        data[to_camel(v)] = rowAsDict[k]
    return data

def process_sheet(sheet, titles, field_defns):
    print("processing", sheet.title)
    rows = [x for x in sheet.iter_rows()]
    if not is_title_row(titles, rows[0]):
        print("Sheet doesn't have expected titles")
        return []

    dicts = [convert_row_to_dict(titles, row) for row in rows[1:]]
    structs = [[extract(defn, x) for x in dicts] for defn in field_defns]
    return structs


def main():
    wb = load_workbook(filename=path_to_xlsx(), data_only=False)
    print(wb.sheetnames)
    for sheet in wb:
        if sheet.title == "SCHOOL-ORG":
            (organisations, schools, locations) = process_sheet(sheet, SCHOOL_TITLES, [ORGANISATION_FIELDS, SCHOOL_FIELDS, LOCATION_FIELDS])
        elif sheet.title == "TEACHER":
            teachers = process_sheet(sheet, TEACHER_TITLES, [TEACHER_FIELDS])
        elif sheet.title == "STUDENT":
            students = process_sheet(sheet, STUDENT_TITLES, [STUDENT_FIELDS])
        else:
            print("Ignoring sheet:", sheet.title)
    data = {
        "organisations": organisations,
        "schools": schools,
        "locations": locations,
        "teachers": teachers,
        "students": students
    }
    print(json.dumps(data))

if __name__ == "__main__":
    main()
