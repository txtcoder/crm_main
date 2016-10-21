(function(){
  'use strict';

  angular.module('Crm')
  .service("CrmService", CrmService);

  CrmService.$inject=["$http"];
  function CrmService($http) {
    this.fetchData= function(){
      return $http.get("https://salty-journey-18993.herokuapp.com/contacts.json");
    }
  }
})();
