import os.path
import json
import requests

SOURCE_FILE = "./Location-extract.txt"
TITLE_MARKER = "LOCATION_NAME"
PLACE_API_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json"
PLACE_API_KEY = "AIzaSyDQkcz38z2AbEYTuSIXDj66DEixa7LCDhs"

def path_to_source():
    path_to_py = os.path.abspath(os.path.dirname(__file__))
    return os.path.join(path_to_py, SOURCE_FILE)


def process_one(line):
    (name, electorate, address, suburb, state, postcode) = line.split("\t")
    # print(name)
    
    name = name \
        .replace("GHS", "Girls High School") \
        .replace("BHS", "Boys High School") \
        .replace("HS", "High School") \
        .replace("PS", "Public School")

    payload = {
        "key": PLACE_API_KEY,
        "query": f"{name}, {address}, {suburb}, {state}, {postcode}"
        # "type": "school"  # Emperically, results are better without specifying this
    }
    response = requests.get(PLACE_API_URL, params=payload)
    json_data = json.loads(response.text)
    if json_data["status"] != "OK":
        # Try again with just the address
        payload = {
            "key": PLACE_API_KEY,
            "query": f"{address}, {suburb}, {state}, {postcode}"
            # "type": "school"  # Emperically, results are better without specifying this
        }
        response = requests.get(PLACE_API_URL, params=payload)
        json_data = json.loads(response.text)
        
    if json_data["status"] != "OK":
        data = {
            "query": payload["query"],
            "found": False
        }
        return data

    results = json_data["results"]
    if len(results) > 1:
        # Look for an exact name match
        exact_matches = [x for x in results if x["name"] == name]
        if any(exact_matches):
            results = exact_matches
        primary_school_alt = name.replace("Public School", "Primary School")
        exact_matches = [x for x in results if x["name"] == primary_school_alt]
        if any(exact_matches):
            results = exact_matches

    # if len(results) > 1:
    #     # Filter for schools only
    #     results = [x for x in results if "school" in x["types"] or "university" in x["types"]]

    if len(results) == 0:
        return {
            "query": payload["query"],
            "noSchools": True,
            "results": results
        }

    result1 = results[0]
    data = {
        "name": result1["name"],
        "formattedAddress": result1["formatted_address"],
        "found": True,
        "electorate": electorate, 
        "address": address, 
        "suburb": suburb, 
        "state": state, 
        "postcode": postcode,
        "placeId": result1["place_id"],
        "lat": result1["geometry"]["location"]["lat"],
        "lng": result1["geometry"]["location"]["lng"]
    }
    if len(results) > 1:        
        data.update({
            "query": payload["query"],
            "multipleResults": len(results),
            "results": results
        })

    return data

        
def main():
    with open(path_to_source()) as f:
        lines = [x.strip() for x in f.readlines() if not x.startswith(TITLE_MARKER)]
    sorted_lines = sorted(lines)
    unique_lines = [x for (i, x) in enumerate(sorted_lines) if i == 0 or x != sorted_lines[i-1]]
    data = [process_one(x) for x in unique_lines]
    print("const locations = %s\n\nexport default locations;" % json.dumps(data))


if __name__ == "__main__":
    main()
