const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resultsSchema = new Schema({
  description: { type: String, required: true },
});

const results = mongoose.model('results', resultsSchema);

module.exports = results;