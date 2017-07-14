import argparse
import simplejson as json
import lxml
from lxml import objectify
from pymongo import MongoClient

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

if __name__ == "__main__":
    args = process_args()
    bc211_xml_file = args.bc211_xml_file
    mongo_uri = args.mongo_uri

    with open(bc211_xml_file) as fp:
        bc211_string = fp.read()
        obj = objectify.fromstring(bc211_string)
        bc211_json = json.dumps(obj, cls=objectJSONEncoder)

    # hacky way to get all the agencies.
    bc211_d = json.loads(bc211_json)[0]['Agency']

    client = MongoClient(mongo_uri)
    agencies = client.bc211.agencies2
    print "Dumping {} records to mongo.".format(len(bc211_d))
    for agency in bc211_d:
        agencies.insert_one(agency)
