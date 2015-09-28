var candidateController = function($scope, $state) {

  console.log($scope, $state.params);

};

candidateController.$inject = ["$scope", "$state"];

module.exports = candidateController;