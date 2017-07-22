var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FundingSchema = new Schema({
  id:  { type: String, required: true },
  organization_id: String,
  service_id: String,
  source: String
}, { collection : 'funding' });

module.exports = mongoose.model('Funding', FundingSchema );
