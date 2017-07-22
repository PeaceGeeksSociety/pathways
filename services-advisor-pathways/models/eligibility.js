var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EligibilitySchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  eligibility: String,
}, { collection : 'eligibility' });

module.exports = mongoose.model('Eligibility', EligibilitySchema );
