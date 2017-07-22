var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  id:  { type: String, required: true },
  organization_id: String,
  service_id: String,
  service_at_location_id: String,
  name: String,
  title: String,
  department: String,
  email: String
}, { collection : 'contact' });

module.exports = mongoose.model('Contact', ContactSchema );
