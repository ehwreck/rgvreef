require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const routes = require('./routes/root');
const corsOptions = require('./config/corsOptions');
const { logger } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

app.use(logger);

app.use(cors(corsOptions));

// Receive and parse json data
app.use(express.json());

app.use(cookieParser());

// Server static images
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type(txt).send('404 Not Found');
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
