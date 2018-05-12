// Requires friends array
var friendList = require("../data/friends.js");

// Get and Post routes
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendList);
  });

  app.post("/api/friends", function (req, res) {
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    // Loops through friends array
    for (var i = 0; i < friendList.length; i++) {
      var scoresDiff = 0;
      // Compares scores
      for (var j = 0; j < newFriendScores.length; j++) {
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      // Pushes result to array
      scoresArray.push(scoresDiff);
    }

    // Finds best match of friends
    for (var i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoresArray[bestMatch]) {
        bestMatch = i;
      }
    }

    // Returns best match
    var bff = friendList[bestMatch];
    res.json(bff);

    // Pushes to array
    friendList.push(req.body);
  });
};
