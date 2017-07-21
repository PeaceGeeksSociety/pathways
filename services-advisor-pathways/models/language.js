var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LanguageSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  location_id: String,
  source: String,
  language: String
});

module.exports = mongoose.model('Language', LanguageSchema );
