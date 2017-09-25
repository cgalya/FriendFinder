
// path npm package gets the correct file path for html
var path = require('path');

module.exports = function (app) {

  // when a user visits the url plus /survey, they are shown the survey.html file
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/survey.html"));
  });

  // this is a catch all route for any additions to the basic url (except /survey) and sends the user to the
    // home.html file
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"));
  });
};
