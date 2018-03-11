from openpyxl import load_workbook
import os.path


SOURCE_XLSX = "./Schools Locations Classes - Feb 2018.xlsx"
TITLES = ["Organisation", "School", "Location", "IBN ID", "File No", "Language", "Classes",
          "Address1", "Address2", "Suburb", "State", "Postcode", "Contact Name", "Contact Phone", "Electorate", "Education Officer"]


def path_to_xlsx():
    path_to_py = os.path.abspath(os.path.dirname(__file__))
    return os.path.join(path_to_py, SOURCE_XLSX)


def process_row(row):
    print(tuple(x.value for x in row))


def main():
    wb = load_workbook(filename=path_to_xlsx(), data_only=False)
    sheet = wb["Sheet0"]
    found_titles = False
    for row in sheet.iter_rows():
        if found_titles:
            process_row(row)
        else:
            found_titles = all(x.value == TITLES[i]
                               for (i, x) in enumerate(row))


if __name__ == "__main__":
    main()
