var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccessibilityForDisabilitiesSchema = new Schema({
  id:  { type: String, required: true },
  locationId: String,
  accessibility: String,
  details: String
});
