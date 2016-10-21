(function () {
  'use strict';

  angular.module('Crm')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'src/login/login.html',
      controller: 'LoginController as login'
    })
    .state('client_info', {
      url: '/client_info',
      templateUrl: 'src/main_page/client_info.html',
      controller: 'ClientInfoController as client_info'
    })

  }

})();
