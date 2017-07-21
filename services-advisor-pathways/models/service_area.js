var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceAreaSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  service_area: String,
  description: String
});

module.exports = mongoose.model('ServiceArea', ServiceAreaSchema );
