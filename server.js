'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {

});
app.get('/login', (req, res) => {
  res.redirect('https://auth.tdameritrade.com/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000&client_id=MICHAEL@AMER.OAUTHAP');
});

app.get('*', (req,res) => {
  res.status(404);
  res.statusMessage = 'Not found';
});

app.use( (err, req, res, next) => {
  res.status(500);
  res.statusMessage = 'Server Error';
});

module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`Server up on port ${port}`));
  },
};