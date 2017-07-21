var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhoneSchema = new Schema({
  id:  { type: String, required: true },
  locationId: String,
  serviceId: String,
  organizationId: String,
  contactId: String,
  serviceAtLocationId: String,
  number: { type: String, required: true },
  extension: Number,
  type: String, // TODO: only year
  language: String,
  description: String,
  department: String
});
