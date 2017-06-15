//NPM NODEMON//

//Dependencies//
var express =  require("express");
var url = require("url");
var http = require("http");
var htmlRoutes = require("/htmlRoute")
var apiRoutes = require("/apiRoute")

//Settiung up express//
var app = express();
var PORT = process.env.PORT || 3000;

//Express handling//
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


//start server//
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
