var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MetadataSchema = new Schema({
  id:  { type: String, required: true },
  resource_id: { type: String, required: true },
  last_action_date: { type: Date, required: true },
  last_action_type: { type: String, required: true },
  field_name: { type: String, required: true },
  previous_value: { type: String, required: true },
  replacement_value: { type: String, required: true },
  updated_by: { type: String, required: true }
}, { collection : 'metadata' });

module.exports = mongoose.model('MetaTableDescription', MetaTableDescriptionSchema );
