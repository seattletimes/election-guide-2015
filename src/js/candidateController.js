var candidateMap = window.guideData.candidates.reduce(function(map, item) {
  var last = item.name.split(" ").pop();
  item.href = last;
  map[last] = item;
  return map;
}, {});

var candidateController = function($scope, $state) {

  $scope.candidates = window.guideData.candidates;

  var nameParam = $state.params.name;
  if (nameParam) {
    console.log(nameParam, candidateMap[nameParam])
    $scope.selected = candidateMap[nameParam];
  }

};

candidateController.$inject = ["$scope", "$state"];

module.exports = candidateController;