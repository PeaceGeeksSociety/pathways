var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
  id:  { type: String, required: true },
  name: { type: String, required: true },
  alternate_name: String,
  description: { type: String, required: true },
  email: String,
  url: String,
  taxStatus: String,
  taxId: String,
  year_incorporated: Date, // TODO: only year
  legal_status: String
}, { collection : 'organization' });

module.exports = mongoose.model('Organization', OrganizationSchema );
