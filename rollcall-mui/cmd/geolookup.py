from openpyxl import load_workbook

SOURCE_XLSX = "/Users/phillip/Documents/GitHub/sicle/rollcall-mui/cmd/Schools Locations Classes - Feb 2018.xlsx"
TITLES = ["Organisation", "School", "Location", "IBN ID", "File No", "Language", "Classes",
          "Address1", "Address2", "Suburb", "State", "Postcode", "Contact Name", "Contact Phone", "Electorate", "Education Officer"]


def process_row(row):
    print(tuple(x.value for x in row))


def main():
    wb = load_workbook(filename=SOURCE_XLSX, data_only=False)
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
