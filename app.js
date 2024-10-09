const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const webtoonRoutes = require('./routes/route');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', webtoonRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
