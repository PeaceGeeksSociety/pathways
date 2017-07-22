var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AccessibilityForDisabilitiesSchema = new Schema({
  id:  { type: String, required: true },
  location_id: { type: String, required: true },,
  accessibility: { type: String, required: true },,
  details: { type: String, required: true }
}, { collection : 'accessibility_for_disabilities' });

module.exports = mongoose.model('AccessibilityForDisabilities', AccessibilityForDisabilitiesSchema );
