const express = require('express');
const app = express();
const cors = require('cors');
const locations = require('./roots/locations');
const teams = require('./roots/teams');
const player = require('./roots/player');

app.use(cors());
app.use(express.json());

app.use(express.static('assets'))

app.use("/locations", locations);
app.use("/teams", teams);
app.use("/playerProfile", player);



app.listen(8080, () => {
    console.log('Listening on port 8080');
  });