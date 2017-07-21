var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ServiceAtLocationSchema = new Schema({
  id:  { type: String, required: true },
  serviceId: { type: String, required: true },
  locationId: { type: String, required: true },
  description: String
});
