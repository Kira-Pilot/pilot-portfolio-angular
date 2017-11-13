angular.module('pilotPortfolio')
  .controller('HomeController', HomeController)
  .controller('AboutController', AboutController)
  .controller('ContactController', ContactController)
  .component('home', {
    templateUrl: 'home.html',
    bindings: {

    },
    controllerAs: 'vm',
    controller: 'HomeController'
  })
  .component('about', {
    templateUrl: 'about.html',
    bindings: {

    },
    controllerAs: 'vm',
    controller: 'AboutController'
  })
  .component('contact', {
    templateUrl: 'contact.html',
    bindings: {

    },
    controllerAs: 'vm',
    controller: 'ContactController'
  })

  HomeController.$inject = [];
  function HomeController () {
    var vm = this;
  }


  AboutController.$inject = [];
  function AboutController () {
    var vm = this;
  }

  ContactController.$inject = [];
  function ContactController () {
    var vm = this;
  }

