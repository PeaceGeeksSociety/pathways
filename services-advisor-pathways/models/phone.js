var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneSchema = new Schema({
  id:  { type: String, required: true },
  location_id: String,
  service_id: String,
  organization_id: String,
  contact_id: String,
  service_at_location_id: String,
  number: { type: String, required: true },
  extension: Number,
  type: String, // TODO: only year
  language: String,
  description: String,
  department: String
}, { collection : 'phone' });

module.exports = mongoose.model('Phone', PhoneSchema );
