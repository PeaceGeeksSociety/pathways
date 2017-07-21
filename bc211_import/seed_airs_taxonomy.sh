# Make sure you run the csv through the lint tool online: https://csvlint.io
# You can download a standardized version.
mongoimport --port=28000 -d bc211 -c airs_taxonomies --type csv --file data/airs_taxonomy.csv --headerline
