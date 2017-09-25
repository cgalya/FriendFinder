// required npm packages: express, body-parser, and path.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// initialize express as app
var app = express();
// set the port to 3000
var PORT = process.env.PORT || 3000;

// body parser code for interpreting data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('public'));

// links to the routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});