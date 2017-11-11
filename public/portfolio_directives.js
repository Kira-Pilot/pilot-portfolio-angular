angular.module('pilotPortfolio')
  .controller('HomeController', HomeController)
  .component('home', {
    templateUrl: 'home.html',
    bindings: {

    },
    controllerAs: 'vm',
    controller: 'HomeController'
  })

  HomeController.$inject = [];
  function HomeController () {
    var vm = this;
    vm.test = "KIRA";

  }

