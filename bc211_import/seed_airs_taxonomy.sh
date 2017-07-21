# Make sure you run the csv through the lint tool online: https://csvlint.io
# You can download a standardized version.
mongoimport --port=28000 -d bc211 -c airs_taxonomies --type csv --file /Users/tukrre/dev/pathways/bc211_import/output.csv --headerline
