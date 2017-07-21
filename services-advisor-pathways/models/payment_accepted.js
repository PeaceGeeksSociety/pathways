var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentAcceptedSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  payment: String
});

module.exports = mongoose.model('PaymentAccepted', PaymentAcceptedSchema );
