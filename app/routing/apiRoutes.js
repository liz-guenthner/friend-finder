// var friends = require('../data/friends.js');
// var path = require('path');

// module.exports = function(app) {

//   app.get("/api/friends", function(req, res) {
//     res.json(friends);
//   });


//   app.post("/api/friends", function(req, res) {

//     var newFriend = req.body;
//     friends.push(newFriend);

//     var newFriendScores = newFriend.scores;

//     function sum(input) {
//       if (toString.call(input) !== friends)
//         return false;
//           var total =  0;
//             for(var i=0;i<input.length;i++) {                  
//               if(isNaN(input[i])){
//                 continue;
//               }
//               total += Number(input[i]);
//               }
//               return total;
//             }
//             console.log(sum(newFriendScores));




//     // var findMatch = req.params.friends;
  
//     // console.log(findMatch);
  
//     // for (var i = 0; i < NewFriendScores.length; i++) {
//     //   if (findMatch === friends[i].scores) {
//     //     return res.json(characters[i]);
//     //   }
//     // }
  
//     // return res.json(false);

//     // for (var i = 0; i < newFriendScores.length; i++) {
//     //   for (var j = 0; j < friendsArray.length; j++) {
//     //       if (friends[i].scores == newFriend.scores[j]) {
//     //         // $('div:contains("'+daysArray[j]+'")').append(
//     //         //   "<div class='assignment'>"+courseHwork[i]+" - appended</div>");
//     //         console.log("something matches");
//     //       }
//     //   }
//     // }

//     // // return res.json(false);



    
//     // console.log(newFriendScores);
//     // console.log(friendsArray);
//     // // console.log(friends.scores);



//   });

// }

var friends = require("../data/friends");
var fs = require("fs");

//function for calculating the sum of elements in an array
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
const arrMin = arr => Math.min(...arr);
  
  module.exports = function(app) {
  
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    // If no matching route is found default to home
    app.post("/api/friends", function(req, res) {
      var differenceArr = [];
      var userChoices = req.body.scores;
      
      for(i=0; i<friends.length; i++) {
        var comparisonArr = [];
        for(j=0;j<userChoices.length; j++) {
          var diff = Math.abs(Number(userChoices[j])-Number(friends[i].scores[j]));
          comparisonArr.push(diff);
        }
        var totalDiff = arrSum(comparisonArr)
        // var name = friendsData[i].name;
        differenceArr.push(totalDiff);
      }

      friends.push(req.body);
      var minDiff = arrMin(differenceArr);
      var diffIndex =  differenceArr.indexOf(minDiff);


      var friendName =  friends[diffIndex].name;
      var friendPic =   friends[diffIndex].photo;

      // alert(friendPic, friendName);
      var friendObj = {
        "name": friendName,
        "image": friendPic
      };

      console.log(friends.length);
      console.log("differences Arr: " ,  differenceArr);
      console.log(diffIndex);
      res.json(friendObj);
    });

  }