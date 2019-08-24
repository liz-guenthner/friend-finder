var friends = require('../data/friends.js');
var path = require('path');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    friends.push(newFriend);

    const newFriendScores = newFriend.scores;
    const friendsScores =  friends[i].scores;

    // for (var i = 0; i < newFriendScores.length; i++) {
    //   for (var j = 0; j < newFriend.scores.length; j++) {
    //       if (friends.scores[i] == newFriend.scores[j]) {
    //         // $('div:contains("'+daysArray[j]+'")').append(
    //         //   "<div class='assignment'>"+courseHwork[i]+" - appended</div>");
    //         console.log("something matches");
    //       }
    //   }
    // }
    console.log(newFriendScores);
    console.log(friendsScores);



  });

}