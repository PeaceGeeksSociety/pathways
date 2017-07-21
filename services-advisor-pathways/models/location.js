var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
  id:  { type: String, required: true },
  organizationId: String,
  name: String,
  alternateName: String,
  description: String,
  transportation: String,
  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model('Location', LocationSchema );
