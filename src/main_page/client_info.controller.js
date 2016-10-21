(function(){
  'use strict';

  angular.module('Crm')
  .controller("ClientInfoController", ClientInfoController);

  ClientInfoController.$inject = ['CrmService', '$location','$scope','$timeout'];
  function ClientInfoController(CrmService, $location, $scope, $timeout) {
    $scope.contacts=[];
    $scope.editMode=false;
    CrmService.fetchData().then(function(obj){
      $timeout(function(){
        $scope.curContact=obj.data[0];
      });
    });


    $scope.edit = function(){
      $scope.editMode=true;
    }
    $scope.save = function(){
      $scope.editMode=false;
      CrmService.update($scope.curContact);
    }
  }
})();
