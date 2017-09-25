
// link to the friends.js data file
var friends = require("../data/friends");

module.exports = function (app) {

  // when the user visits the url plus /api/friends, they are shown the friends array of json objects
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // when the user submits the survey form, the data is pushed to the friends array in json format and their
  // information is compared with the existing friends array to find the best friend match
  app.post("/api/friends", function (req, res) {
    var userInput = req.body;
    var userScores = userInput.scores;

    var bestCat = {
      "name": "",
      "photo": "",
      "matchScore": 100000
    }

    // comparing user submitted scores with the scores of the cats in the friends array and filling in the values of
    // bestCat to send back to the user as the best friend match
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
    // add the user to the friends array
    friends.push(userInput);
    // send the best cat match back to the user
    res.json(bestCat);
  });
};