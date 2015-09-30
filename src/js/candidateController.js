var data = require("./guideData");

var candidateController = function($scope, $state, $location) {

  $scope.candidates = data.candidates.all;
  $scope.questions = data.questions;

  var nameParam = $state.params.name;
  if (nameParam) {
    $scope.selected = data.candidates.lookup[nameParam];
  }

  $scope.$watch("selected", function() {
    if (!$scope.selected) return;
    //update the URL
    $state.go("candidates", { name: $scope.selected ? $scope.selected.href : "" }, { notify: false });
  });

};

candidateController.$inject = ["$scope", "$state", "$location"];

module.exports = candidateController;