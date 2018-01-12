var app = angular.module('pilotPortfolio', ['stellar.directives'])

.config(function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
})

app.controller("mainCtrl", function($scope, stellar) {
  stellar.against(window);
});



