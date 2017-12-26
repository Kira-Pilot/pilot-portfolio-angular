var app = angular.module('pilotPortfolio', ['stellar.directives']);

app.controller("mainCtrl", function($scope, stellar) {
  stellar.against(window);

});



