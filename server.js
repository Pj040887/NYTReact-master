
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Article = require("./models/Article.js");
var request = require("request");
mongoose.Promise = Promise;
var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("public"));

var databaseURI = (process.env.MONGODB_URI ? process.env.MONGODB_URI : "mongodb://localhost/week19hw");
mongoose.connect(databaseURI);
var db = mongoose.connection;

db.on("error", function(error) 
{
  console.log
  console.log("Mongoose Error: ", error);
});

db.once("open", function() 
{
  console.log("Mongoose connection successful.");
});

require("./routes/html-routes.js")(app, db);
require("./routes/api-routes.js")(app, db);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() 
{
  console.log("App running on port 3000!");
});
