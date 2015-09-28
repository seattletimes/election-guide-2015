var issuesController = function($scope, $state) {

  $scope.test = "hello world";

  console.log($state);

};

issuesController.$inject = ["$scope", "$state"];

module.exports = issuesController;