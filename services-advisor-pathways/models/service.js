var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceSchema = new Schema({
  id:  { type: String, required: true },
  organization_id: { type: String, required: true},
  program_id: String,
  name: { type: String, required: true },
  alternate_name: String,
  description: String,
  url: String,
  status: { type: String, required: true },
  interpretation_services: String,
  application_process: String,
  wait_time: String,
  fees: String,
  accreditations: String,
  licenses: String,
  taxonomy_ids: String
}, { collection : 'service' });

module.exports = mongoose.model('Service', ServiceSchema );
