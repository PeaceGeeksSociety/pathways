var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaxonomySchema = new Schema({
  id:  { type: String, required: true },
  name: { type: String, required: true },
  parent_id: String,
  parent_name: String,
  vocabulary: String
}, { collection : 'taxonomy' });

module.exports = mongoose.model('Taxonomy', TaxonomySchema );
