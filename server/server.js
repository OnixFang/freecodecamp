// Modules
const path = require('path');
const express = require('express');
const app = express();

// Environment variables
const { HOST, PORT } = process.env;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`Server listening on: http://${HOST}:${PORT}`);
});
