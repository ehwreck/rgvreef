require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const path = require('path');
const routes = require('./routes/root');

// Server static images
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
