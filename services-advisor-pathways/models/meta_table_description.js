var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MetaTableDescriptionSchema = new Schema({
  id:  { type: String, required: true },
  name: String,
  language: String,
  character_set: String
});

module.exports = mongoose.model('MetaTableDescription', MetaTableDescriptionSchema );
