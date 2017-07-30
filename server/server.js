const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Running on port: ${PORT}!`);
  }
});

module.exports = app;
