(function () {
  'use strict';

  angular.module('Crm')
  .config(RoutesConfig)
  .run(RouteChange);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('login', {
      url: '/',
      title: 'Login',
      templateUrl: 'src/login/login.html',
      controller: 'LoginController as login'
    })
    .state('client_info', {
      url: '/client_info',
      title: 'Client Info',
      templateUrl: 'src/main_page/client_info.html',
      controller: 'ClientInfoController as client_info'
    })
    .state('contacts', {
      url: '/contacts',
      title: 'Contact',
      templateUrl: 'src/contacts/contacts.html'
    })

    .state('agenda', {
      url: '/agenda',
      title: 'Agenda',
      templateUrl: 'src/agenda/agenda.html'
    })



  }

  RouteChange.$inject=['$rootScope'];
  function RouteChange($rootScope) {
      $rootScope.$on('$stateChangeSuccess', function (event, current, previous) {
        console.log('hi');
        console.log(current);
        $rootScope.title = current.title;
    })};




})();
