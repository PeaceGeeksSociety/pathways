var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProgramSchema = new Schema({
  id:  { type: String, required: true },
  organizationId: { type: String, required: true },
  name: { type: String, required: true },
  alternateName: String
});
