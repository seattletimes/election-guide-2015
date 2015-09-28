var localityController = function($scope, $state) {

  $scope.test = "hello world";

  console.log($state);

};

localityController.$inject = ["$scope", "$state"];

module.exports = localityController;