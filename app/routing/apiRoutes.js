var friends = require('../data/friends.js');
var path = require('path');

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

    var newFriend = req.body;
    friends.push(newFriend);

    var newFriendScores = newFriend.scores;

    function sum(input) {
      if (toString.call(input) !== friends)
        return false;
          var total =  0;
            for(var i=0;i<input.length;i++) {                  
              if(isNaN(input[i])){
                continue;
              }
              total += Number(input[i]);
              }
              return total;
            }
            console.log(sum(newFriendScores));




    // var findMatch = req.params.friends;
  
    // console.log(findMatch);
  
    // for (var i = 0; i < NewFriendScores.length; i++) {
    //   if (findMatch === friends[i].scores) {
    //     return res.json(characters[i]);
    //   }
    // }
  
    // return res.json(false);

    // for (var i = 0; i < newFriendScores.length; i++) {
    //   for (var j = 0; j < friendsArray.length; j++) {
    //       if (friends[i].scores == newFriend.scores[j]) {
    //         // $('div:contains("'+daysArray[j]+'")').append(
    //         //   "<div class='assignment'>"+courseHwork[i]+" - appended</div>");
    //         console.log("something matches");
    //       }
    //   }
    // }

    // // return res.json(false);



    
    // console.log(newFriendScores);
    // console.log(friendsArray);
    // // console.log(friends.scores);



  });

}