var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EligibilitySchema = new Schema({
  id:  { type: String, required: true },
  serviceId: String,
  eligibility: String,
});
