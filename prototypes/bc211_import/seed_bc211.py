import argparse
import simplejson as json
import lxml
from lxml import objectify
from pymongo import MongoClient
import demjson

def process_args():
    parser = argparse.ArgumentParser(description='this will populate the mongodb specified with bc211 agency records.')
    parser.add_argument('bc211_xml_file', help='the path to the XML file containing BC211 records.')
    parser.add_argument('mongo_uri', help='the mongodb URI where we wish to store the records.')
    args = parser.parse_args()
    return args

class objectJSONEncoder(json.JSONEncoder):
    model = (
        (lxml.objectify.IntElement, int),
        (lxml.objectify.NumberElement, float),
        (lxml.objectify.FloatElement, float),
        (lxml.objectify.ObjectifiedDataElement,
            lambda s: unicode(s).strip().encode('utf-8')),
    )

    def default(self,o):
        for o_type, constructor in self.model:
            if isinstance(o, o_type):
                return constructor(o)
        if hasattr(o, '__dict__'):
            #For objects with a __dict__, return the encoding of the __dict__
            return [item.__dict__ for item in o]
        return json.JSONEncoder.default(self, o)

def parse_taxonomy(tax):
    new_tax = dict(Code=None)
    try:
        # if its a dictionary, then lets store it as such.
        new_tax['Code'] = demjson.decode(tax['Code'])
    except demjson.JSONDecodeError:
        # It is just a string then, just store it.
        new_tax = tax['Code']
    return new_tax

def parse_site(site):
    # add this to keep it clean.
    site['AgencyKey'] = site['Key']
    site['SiteService'] = site['SiteService'][0]

    # Parse the taxonomies into dictionaries.
    parsed_taxes = []
    for tax in site['SiteService']['Taxonomy']:
        new_tax = parse_taxonomy(tax)
        parsed_taxes.append(new_tax)
    site['SiteService']['Taxonomy'] = parsed_taxes

    return site

if __name__ == "__main__":
    args = process_args()
    bc211_xml_file = args.bc211_xml_file
    mongo_uri = args.mongo_uri

    with open(bc211_xml_file) as fp:
        bc211_string = fp.read()
        obj = objectify.fromstring(bc211_string)
        bc211_json = json.dumps(obj, cls=objectJSONEncoder)

    # with open('sample.json', mode='w') as fp:
    #     fp.write(bc211_json)

    # hacky way to get all the agencies.
    bc211_d = json.loads(bc211_json)[0]['Agency']

    client = MongoClient(mongo_uri)
    agencies = client.bc211.agencies
    sites = client.bc211.sites

    print "Dumping {} agencies to mongo.".format(len(bc211_d))
    for agency in bc211_d:
        if 'Site' in agency:
            agency_sites = agency['Site']
            for site in agency_sites:
                new_site = parse_site(site)

                sites.insert_one(site)
            del agency['Site']
        agencies.insert_one(agency)
