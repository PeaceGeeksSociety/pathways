var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostalAddressSchema = new Schema({
  id:  { type: String, required: true },
  locationId: String,
  attention: String,
  address1: { type: String, required: true },
  address2: String,
  address3: String,
  address4: String,
  city: { type: String, required: true },
  region: String,
  stateProvince: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: String
});

module.exports = mongoose.model('PostalAddress', PostalAddressSchema );
