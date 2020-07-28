# resources used
# https://www.geeksforgeeks.org/working-csv-files-python/
# https://www.geeksforgeeks.org/read-write-and-parse-json-using-python/
# https://stackoverflow.com/questions/18337407/saving-utf-8-texts-in-json-dumps-as-utf8-not-as-u-escape-sequence

# importing csv module 
import csv 
  
# csv file name 
filename = "menu.csv"
  
# initializing the titles and rows list 
fields = [] 
rows = [] 
  
# reading csv file 
with open(filename, 'r') as csvfile: 
    # creating a csv reader object 
    csvreader = csv.reader(csvfile) 
      
    # extracting field names through first row 
    fields = next(csvreader) 
  
    # extracting each data row one by one 
    for row in csvreader: 
        rows.append(row) 

# categorize items
dictionary = {}
for row in rows:
  # if key already exists, append the item to list
  if row[0] in dictionary:
    item = {"id":row[1], "spicy":row[2], "english": row[3], "chinese": row[4], "price":row[5], "limited":row[6]}
    dictionary[row[0]].append(item)
  # if key doesnt exist, make a new list and append item to list
  else:
    dictionary[row[0]] = []
    item = {"id":row[1], "spicy":row[2], "english": row[3], "chinese": row[4], "price":row[5], "limited":row[6]}
    dictionary[row[0]].append(item)

# import json module
import json

# output to json
with open("menu.json", "w", encoding='utf8') as outfile: 
    json.dump(dictionary, outfile, ensure_ascii=False)
