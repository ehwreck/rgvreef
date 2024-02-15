require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const routes = require('./routes/root');
const corsOptions = require('./config/corsOptions');

app.use(cors(corsOptions));

// Receive and parse json data
app.use(express.json());

app.use(cookieParser());

// Server static images
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
