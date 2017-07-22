db.getCollection('airs_taxonomies').dropIndexes()
db.getCollection('sites').dropIndexes()

db.getCollection('airs_taxonomies').createIndex(
    {
        "Code+B1": "text",
        Definition: "text",
        Keywords: "text"
    },
    {
        weights: {
            "Code+B1": 5,
            Keywords: 10,
            Definition: 8
        },
        name: "TextIndex"
    }
)

db.getCollection('sites').createIndex(
    {
        Name: "text",
        SiteDescription: "text",
        "SiteService.Description": "text"
    },
    {
        weights: {
            Name: 3,
            SiteDescription: 10,
            "SiteService.Description": 10
        },
        name: "TextIndex"
    }
)

db.getCollection('sites').createIndex({"SiteService.Taxonomy": 1})

