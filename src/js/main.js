// require("./lib/social");
// require("./lib/ads");
// var track = require("./lib/tracking");

var app = require("./application");

var configFunction = function($state, $router) {

  $router.otherwise("/intro");

  $state.state("intro", {
    url: "/intro",
    template: require("./_introView.html")
  });

  $state.state("candidates", {
    url: "/candidates/{candidateName}",
    template: require("./_candidateView.html"),
    controller: require("./candidateController")
  });

  $state.state("measures", {
    url: "/measures",
    template: require("./_measuresView.html"),
    controller: require("./measuresController")
  });

  $state.state("issues", {
    url: "/issues",
    template: require("./_issuesView.html"),
    controller: require("./issuesController")
  });

  $state.state("locality", {
    url: "/locality",
    template: require("./_localityView.html"),
    controller: require("./localityController")
  });

};
configFunction.$inject = ["$stateProvider", "$urlRouterProvider"];

app.config(configFunction);