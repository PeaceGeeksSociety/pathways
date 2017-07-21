var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegularSchedule = new Schema({
  id:  { type: String, required: true },
  serviceId: String,
  locationId: String,
  serviceAtLocationId: String,
  weekday: { type: Number, required: true },
  opensAt: Date, // TODO: Maybe?
  closesAt: Date //TODO: Maybe?
});
