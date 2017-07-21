var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentAcceptedSchema = new Schema({
  id:  { type: String, required: true },
  serviceId: String,
  payment: String
});

module.exports = mongoose.model('PaymentAccepted', PaymentAcceptedSchema );
