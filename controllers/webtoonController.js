const Webtoon = require('../models/Webtoon');

// Get all webtoons
exports.getAllWebtoons = async (req, res) => {
  try {
    const webtoons = await Webtoon.find({});
    res.json(webtoons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get webtoon by ID
exports.getWebtoonById = async (req, res) => {
  try {
    const webtoon = await Webtoon.findById(req.params.id);
    if (!webtoon) return res.status(404).json({ message: 'Webtoon not found' });
    res.json(webtoon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add new webtoon
exports.addWebtoon = async (req, res) => {
  const { title, description, characters } = req.body;

  try {
    const newWebtoon = new Webtoon({ title, description, characters });
    await newWebtoon.save();
    res.status(201).json(newWebtoon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete webtoon by ID
exports.deleteWebtoon = async (req, res) => {
  try {
    const webtoon = await Webtoon.findByIdAndDelete(req.params.id);
    if (!webtoon) return res.status(404).json({ message: 'Webtoon not found' });
    res.json({ message: 'Webtoon deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
