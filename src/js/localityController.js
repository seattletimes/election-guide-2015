var data = require("./guideData");

var getTitle = function(locale, position) {
  if (["bellevue", "king", "schoolBoard"].indexOf(locale) > -1) {
    return "District #" + position;
  }
  if (locale == "port") {
    return "Seat #" + position;
  }
  if (locale == "seattle") {
    return position > 7 ? "Position #" + position : "District #" + position;
  }
  return position;
}

var localityController = function($scope, $state) {

  $scope.locations = [
    { label: "Seattle", data: "seattle" },
    { label: "Bellevue", data: "bellevue" },
    { label: "King Co.", data: "king" },
    { label: "Snohomish Co.", data: "snohomish" },
    { label: "Port", data: "port" },
    { label: "Seattle School Board", data: "schoolBoard" }
  ]

  $scope.setLocale = function(l) {
    var locale = data.races[l];
    var races = Object.keys(locale).map(function(r) {
      var info = {
        position: getTitle(l, r),
        candidates: locale[r]
      };
      return info;
    });
    $scope.races = races;
  };

  var locale = $scope.locale = $state.params.locale || "seattle";

  $scope.setLocale(locale);

};

localityController.$inject = ["$scope", "$state"];

module.exports = localityController;