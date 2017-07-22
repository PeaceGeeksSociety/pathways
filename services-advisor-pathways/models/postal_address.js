var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostalAddressSchema = new Schema({
  id:  { type: String, required: true },
  location_id: String,
  attention: String,
  address1: { type: String, required: true },
  address2: String,
  address3: String,
  address4: String,
  city: { type: String, required: true },
  region: String,
  state_province: { type: String, required: true },
  postal_code: { type: String, required: true },
  country: String
}, { collection : 'postal_address' });

module.exports = mongoose.model('PostalAddress', PostalAddressSchema );
