var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaxonomySchema = new Schema({
  id:  { type: String, required: true },
  name: { type: String, required: true },
  parentId: String,
  parentName: String,
  vocabulary: String
});

module.exports = mongoose.model('Taxonomy', TaxonomySchema );
