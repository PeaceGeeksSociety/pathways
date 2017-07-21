var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FundingSchema = new Schema({
  id:  { type: String, required: true },
  organizationId: String,
  serviceId: String,
  source: String
});
