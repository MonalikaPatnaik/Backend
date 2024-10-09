const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const webtoonController = require('../controllers/webtoonController');
const { authenticateToken } = require('../middleware/auth');
const { validateWebtoon } = require('../middleware/validateInput');

// Public routes
router.get('/webtoons', webtoonController.getAllWebtoons);
router.get('/webtoons/:id', webtoonController.getWebtoonById);

// Protected routes
router.post('/webtoons', authenticateToken, validateWebtoon, webtoonController.addWebtoon);
router.delete('/webtoons/:id', authenticateToken, webtoonController.deleteWebtoon);

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create new user
        user = new User({ email, password });
        await user.save();

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


module.exports = router;
