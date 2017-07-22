var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  id:  { type: String, required: true },
  organization_id: String,
  name: String,
  alternate_name: String,
  description: String,
  transportation: String,
  latitude: Number,
  longitude: Number
}, { collection : 'location' });

module.exports = mongoose.model('Location', LocationSchema );
