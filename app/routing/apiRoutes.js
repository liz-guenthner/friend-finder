var friends = require("../data/friends");
var fs = require("fs");

//function for calculating the sum of elements in an array
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
//function for finding the smallest array value
const arrMin = arr => Math.min(...arr);
  
  module.exports = function(app) {
    // get the json friends object
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    // grab user score and calculate match and then push user score to friends json
    app.post("/api/friends", function(req, res) {
      // blank difference array
      var differenceArr = [];
      // declare userScores variable as the request body with scores key
      var userScores = req.body.scores;
      
      // loop through friends array with i increment
      for(i=0; i<friends.length; i++) {
        // declare comparisonArr as blank array to hold the differences
        var comparisonArr = [];
        // loop through userScores array with j increment
        for(j=0;j<userScores.length; j++) {
          // declare diff variable to hold the absolute value of userScores(score)
          // subtract the friends[i] score[j]
          var diff = Math.abs(Number(userScores[j])-Number(friends[i].scores[j]));
          // pass diff varaible into comparisonArr
          comparisonArr.push(diff);
        }
        // declare variable totalDiff and pass in comparisonArr into arrSum function
        // this will calculate sum of each score array
        var totalDiff = arrSum(comparisonArr)
        // pass totalDiff into differenceArr array
        differenceArr.push(totalDiff);
      }
      // grab user data and push to friends object
      friends.push(req.body);
      // declare minDiff as the least value of all amounts in differenceArr
      var minDiff = arrMin(differenceArr);
      // declare diffIndex as the index number of element in differenceArr
      var diffIndex =  differenceArr.indexOf(minDiff);

      //declare friendName as the item within the friends object .name
      var friendName =  friends[diffIndex].name;
      //declare friendPic as the item within the friends object .photo
      var friendPic =   friends[diffIndex].photo;

      // declare friendObj object to hold data for alert(friendPic, friendName);
      var friendObj = {
        "name": friendName,
        "image": friendPic
      };
      
      // console log how many elements in friends object
      console.log(friends.length);
      // console log the differenceArr and it's elements
      console.log("differences Arr: " ,  differenceArr);
      // console log which index has the lowest difference
      console.log(diffIndex);
      // get friendObj response
      res.json(friendObj);
    });

  }