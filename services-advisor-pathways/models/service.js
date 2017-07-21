var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  id:  { type: String, required: true },
  organizationId: { type: String, required: true },
  programId: String,
  name: { type: String, required: true },
  alternateName: String,
  description: String,
  url: String,
  status: { type: String, required: true },
  interpretationServices: String,
  applicationProcess: String,
  waitTime: String,
  fees: String,
  accreditations: String,
  licenses: String,
  taxonomyIds: String
});

module.exports = mongoose.model('Service', ServiceSchema );
