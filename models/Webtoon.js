const mongoose = require('mongoose');

const WebtoonSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  characters: { type: [String], required: true },
}, { timestamps: true });

module.exports = mongoose.model('Webtoon', WebtoonSchema);
