var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequiredDocumentSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  document: String
});

module.exports = mongoose.model('RequiredDocument', RequiredDocumentSchema );
