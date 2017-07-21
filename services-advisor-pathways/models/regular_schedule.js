var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegularScheduleSchema = new Schema({
  id:  { type: String, required: true },
  serviceId: String,
  locationId: String,
  serviceAtLocationId: String,
  weekday: { type: Number, required: true },
  opensAt: Date, // TODO: Maybe?
  closesAt: Date //TODO: Maybe?
});

module.exports = mongoose.model('RegularSchedule', RegularScheduleSchema );
