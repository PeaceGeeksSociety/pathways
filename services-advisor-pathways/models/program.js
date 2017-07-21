var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramSchema = new Schema({
  id:  { type: String, required: true },
  organization_id: { type: String, required: true },
  name: { type: String, required: true },
  alternate_name: String
});

module.exports = mongoose.model('Program', ProgramSchema );
