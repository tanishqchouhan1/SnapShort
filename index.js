const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();

// Connect to database
connectDB();
app.use(cors({ credentials: true, origin: true }));
// app.use(cors({ origin: '*' }))
app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));