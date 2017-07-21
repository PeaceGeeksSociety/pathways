var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HolidayScheduleSchema = new Schema({
  id:  { type: String, required: true },
  serviceId: String,
  locationId: String,
  serviceAtLocationId: String,
  closed: {type: Boolean, require: true},
  opensAt: Date,
  closesAt: Date,
  startDate: Date,
  endDate: Date
});
