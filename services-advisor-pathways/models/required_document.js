var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequiredDocumentSchema = new Schema({
  id:  { type: String, required: true },
  serviceId: String,
  document: String
});

module.exports = mongoose.model('RequiredDocument', RequiredDocumentSchema );
