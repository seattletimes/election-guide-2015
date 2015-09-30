var data = require("./guideData");

var measuresController = function($scope, $state) {

  $scope.measures = data.measures;

};

measuresController.$inject = ["$scope", "$state"];

module.exports = measuresController;