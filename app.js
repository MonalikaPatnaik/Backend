const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const webtoonRoutes = require('./routes/route');
const rateLimit = require('express-rate-limit');

dotenv.config();
connectDB();

const app = express();

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutes
    max: 100, 
    message: 'Too many requests, please try again later.',
});

// Middleware
app.use(express.json());

app.use('/api', apiLimiter);
app.use('/api', webtoonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
