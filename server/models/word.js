const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WordSchema = new Schema({
  term: String,
  definition: String,
  group: String
});


mongoose.model('word', WordSchema);
