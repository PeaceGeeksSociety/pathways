var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  id:  { type: String, required: true },
  organizationId: String,
  serviceId: String,
  serviceAtLocationId: String,
  name: String,
  title: String,
  department: String,
  email: String
});

module.exports = mongoose.model('Contact', ContactSchema );
