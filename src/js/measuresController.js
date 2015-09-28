var measuresController = function($scope, $state) {

  $scope.test = "hello world";

  console.log($state);

};

measuresController.$inject = ["$scope", "$state"];

module.exports = measuresController;