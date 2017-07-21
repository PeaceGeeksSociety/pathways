var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceTaxonomySchema = new Schema({
  id:  { type: String, required: true },
  serviceId: { type: String, required: true },
  taxonomyId: { type: String, required: true },
  taxonomyDetail: String
});
