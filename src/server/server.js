// Enable dotenv for credential management
const dotenv = require('dotenv');
dotenv.config();
/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
// Resove regeneratornRuntime error when using SuperTest
// Express to run server and routes
const { response } = require('express');

// Start up an instance of app
const app = express();
// Cors for cross origin allowance
app.use(cors());
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Spin up the server
const port = 8082;
const server = app.listen(port, function () {
  console.log(`Travel App running on localhost: ${port}!`)
});

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
});