const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send('This is working');
});

app.listen(3000);
