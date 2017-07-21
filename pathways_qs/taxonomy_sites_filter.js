var filter_keywords = "family language punjabi conversational senior"

// Find all relavent taxonomy terms and return them as an array
var airs_codes = db.getCollection('airs_taxonomies').find(
    {
        $text: {$search: filter_keywords}
    },
    {
        score: {$meta: "textScore"}
    }
).sort( { score: { $meta: "textScore" } }).map(function(elem) { return elem.Code })

// Find all sites with the returned taxonomies and sort them by the keywords
db.getCollection('sites').find(
    {
        "SiteService.Taxonomy": {$in: airs_codes},
        $text: {$search: filter_keywords}
    },
    {
        score: {$meta: "textScore"}
    }
).sort( { score: { $meta: "textScore" } })
