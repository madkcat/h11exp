// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  // Use route to home page
  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
};
