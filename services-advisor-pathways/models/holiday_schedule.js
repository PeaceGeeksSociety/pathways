var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HolidayScheduleSchema = new Schema({
  id:  { type: String, required: true },
  service_id: String,
  location_id: String,
  service_at_location_id: String,
  closed: {type: Boolean, require: true},
  opens_at: Date,
  closes_at: Date,
  start_date: Date,
  end_date: Date
}, { collection : 'holiday_schedule' });

module.exports = mongoose.model('HolidaySchedule', HolidayScheduleSchema );
