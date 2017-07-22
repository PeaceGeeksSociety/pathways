var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LanguageSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  location_id: String,
  source: String,
  language: String
}, { collection : 'language' });

module.exports = mongoose.model('Language', LanguageSchema );
