(function () {
  'use strict';

  angular.module('Crm')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('client_info', {
      url: '/',
      templateUrl: 'src/main_page/client_info.html',
      controller: 'ClientInfoController as client_info'
    })

  }

})();
