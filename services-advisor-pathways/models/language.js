var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LanguageSchema = new Schema({
  id:  { type: String, required: true },
  serviceId: String,
  locationId: String,
  source: String,
  language: String
});
