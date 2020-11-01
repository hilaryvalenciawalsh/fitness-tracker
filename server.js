const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

var PORT = process.env.PORT || 8080;
var db = require("./models");

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});