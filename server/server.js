// Modules
const path = require('path');
const express = require('express');
const app = express();

// Environment variables
const { HOST, PORT } = process.env;
// Static folder
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(publicPath, 'notfound.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://${HOST}:${PORT}`);
});
