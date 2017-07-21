import argparse
import csv

def process_args():
    parser = argparse.ArgumentParser(description='Clean up the csv file containing the AIRS taxonomies from BC211.')
    parser.add_argument('bc211_csv_taxonomies', help='the path to the csv file containing AIRS taxonomy records.')
    args = parser.parse_args()
    return args


if __name__ == "__main__":
    file = "data/2015Mar-LATaxonomy-bc211Keywordcrosswalkguide-ACTIVE.csv"
    output = "data/airs_taxonomy_CLEANED.csv"

    output_csv_lines = []
    headers = None

    with open(file, "rU") as infile:
        reader = csv.reader(infile, dialect=csv.excel_tab)
        headers = reader.next()[0].split(",")
        # Hack - The second column is named Code+B1, which is not that good for attributing to mongodb.
        # So we rename it CodeName
        # headers[1] = "CodeName"

        # go back to the beginning
        infile.seek(0)
        dict_reader = csv.DictReader(infile)

        for entry in dict_reader:

            if not entry['Code']:
                last_entry = output_csv_lines[-1]
                # && delineated keywords
                last_entry['Keywords'] += "&&" + entry['Keywords']
                output_csv_lines[-1] = last_entry
                continue

            output_csv_lines.append(entry)

    with open(output, "w") as outfile:
        csvwriter = csv.DictWriter(outfile, fieldnames=headers)
        csvwriter.writeheader()
        for line in output_csv_lines:
            csvwriter.writerow(line)