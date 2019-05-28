const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for meteorites
const meteoriteschema = new Schema({
  meteorite: {
    type: String,
    required: [true, 'The meteorite name is required']
  },
  count: Number
});

// Model for meteorites
const meteorites = mongoose.model('meteorites', meteoriteschema);

module.exports = meteorites;
