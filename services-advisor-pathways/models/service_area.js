var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceAreaSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  service_area: String,
  description: String
}, { collection : 'service_area' });

module.exports = mongoose.model('ServiceArea', ServiceAreaSchema );
