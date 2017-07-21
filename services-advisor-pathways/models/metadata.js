var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MetadataSchema = new Schema({
  id:  { type: String, required: true },
  resourceId: { type: String, required: true },
  lastActionDate: { type: Date, required: true },
  lastActionType: { type: String, required: true },
  fieldName: { type: String, required: true },
  previousValue: { type: String, required: true },
  replacementValue: { type: String, required: true },
  updatedBy: { type: String, required: true }
});

module.exports = mongoose.model('MetaTableDescription', MetaTableDescriptionSchema );
