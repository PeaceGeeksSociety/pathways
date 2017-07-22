var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PaymentAcceptedSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  payment: String
}, { collection : 'payment_accepted' });

module.exports = mongoose.model('PaymentAccepted', PaymentAcceptedSchema );
