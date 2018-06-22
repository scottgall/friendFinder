var userData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(userData);
  });

  app.post("/api/friends", function(req, res) {
    let userScores = req.body.scores;
    console.log(userScores);
    compareArr = [];

    for (i = 0; i < userData.length; i++) {
      let totalDiff = 0;
      for (x = 0; x < userScores.length; x++) {
        let diff = parseInt(userScores[x]) - parseInt(userData[i].scores[x]);
        totalDiff += Math.abs(diff);
      }
      compareArr.push(totalDiff);
      console.log(compareArr);
    }

    var min = compareArr[0];
    var minIndex = 0;

    for (var i = 1; i < compareArr.length; i++) {
        if (compareArr[i] < min) {
            minIndex = i;
            min = compareArr[i];
        }
    } 
    userData.push(req.body);
    console.log(minIndex);

    res.json(userData[minIndex]);
  });

  app.post("/api/clear", function() {
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });
};
