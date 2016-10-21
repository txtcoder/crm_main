(function(){
  'use strict';

  angular.module('Crm')
  .controller("ClientInfoController", ClientInfoController);

  ClientInfoController.$inject = ['CrmService', '$location','$scope','$timeout'];
  function ClientInfoController(CrmService, $location, $scope, $timeout) {
    $scope.contacts=[];

    CrmService.fetchData().then(function(obj){

      $timeout(function(){
        $scope.curContact=obj.data[0];
      });
    });

    console.log($scope.contacts);
    $scope.curContact=$scope.contacts[0];
    console.log(this.curContact);
  }
})();
