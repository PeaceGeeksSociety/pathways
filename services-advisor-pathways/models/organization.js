var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
  id:  { type: String, required: true },
  name: { type: String, required: true },
  alternateName: String,
  description: { type: String, required: true },
  email: String,
  url: String,
  taxStatus: String,
  taxId: String,
  yearIncorporated: Date, // TODO: only year
  legalStatus: String
});
