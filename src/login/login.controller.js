(function(){
  'use strict';

  angular.module('Crm')
  .controller("LoginController", LoginController);

  LoginController.$inject = ['CrmService', '$location'];
  function LoginController(CrmService, $location) {
    this.login = function () {
      $location.path("/client_info");
    }
  }
})();
