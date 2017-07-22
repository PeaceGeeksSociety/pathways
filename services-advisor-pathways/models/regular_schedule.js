var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RegularScheduleSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  location_id: String,
  service_at_location_id: String,
  weekday: { type: Number, required: true },
  opens_at: Date, // TODO: Maybe?
  closes_at: Date //TODO: Maybe?
}, { collection : 'regular_schedule' });

module.exports = mongoose.model('RegularSchedule', RegularScheduleSchema );
