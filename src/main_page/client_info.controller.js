(function(){
  'use strict';

  angular.module('Crm')
  .controller("ClientInfoController", ClientInfoController);

  ClientInfoController.$inject = ['CrmService', '$location'];
  function ClientInfoController(CrmService, $location) {

  }
})();
