// Your apiRoutes.js file should contain two routes:
//     A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//     A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to
// handle the compatibility logic.

var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var userInput = req.body;
    var userScores = userInput.scores;

    var newFriend = {
      //how does userInput get sent? do i need to create a new object for it or is it already one and i can just push it
      // to friends
    }

    var bestCat = {
      "name": "",
      "photo": "",
      "matchScore": 100000
    }

    for (var i = 0; i < friends.length; i++) {
      var diff = 0;
      for (var j = 0; j < userScores.length; j++) {
        diff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
        if (diff < bestCat.matchScore) {
          bestCat.name = friends[i].name;
          bestCat.photo = friends[i].photo;
          bestCat.matchScore = diff;
        }
      }

    }
    res.json(bestCat);
  });
};