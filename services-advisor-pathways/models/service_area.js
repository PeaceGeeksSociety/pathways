var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceAreaSchema = new Schema({
  id:  { type: String, required: true },
  serviceId: String,
  serviceArea: String,
  description: String
});

module.exports = mongoose.model('ServiceArea', ServiceAreaSchema );
