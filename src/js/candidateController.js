var data = require("./guideData");

var candidateController = function($scope, $state) {

  $scope.candidates = data.candidates.all;
  $scope.questions = data.questions;

  console.log($scope.questions);

  var nameParam = $state.params.name;
  if (nameParam) {
    $scope.selected = data.candidates.lookup[nameParam];
  }

};

candidateController.$inject = ["$scope", "$state"];

module.exports = candidateController;