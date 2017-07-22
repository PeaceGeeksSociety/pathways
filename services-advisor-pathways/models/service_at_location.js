var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceAtLocationSchema = new Schema({
  id:  { type: String, required: true },
  service_id: { type: String, required: true },
  location_id: { type: String, required: true },
  description: String
}, { collection : 'service_at_location' });

module.exports = mongoose.model('ServiceAtLocation', ServiceAtLocationSchema );
