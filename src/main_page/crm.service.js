(function(){
  'use strict';

  angular.module('Crm')
  .service("CrmService", CrmService);

  CrmService.$inject=["$http"];
  function CrmService($http) {
    
  }
})();
