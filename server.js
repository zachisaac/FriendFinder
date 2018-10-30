//Dependencies...
var express = require("express");
var bodyParser = require("body-parser");

//Create EXPRESS server..
var app = express();

//Initial PORT to listen on...
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

//APP is listening on...
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});