(function(){
  'use strict';

  angular.module('Crm')
  .controller("ClientInfoController", ClientInfoController);

  ClientInfoController.$inject = ['CrmService', '$location','$scope','$timeout'];
  function ClientInfoController(CrmService, $location, $scope, $timeout) {
    $scope.doSearch=false;

    $scope.contacts=[];
    $scope.editMode=false;
    $scope.searchTerm= "";
    CrmService.fetchData().then(function(obj){
      $timeout(function(){
        $scope.contacts=obj.data;
        $scope.curContact=obj.data[0];
      });
    });

    $scope.toggleSearch = function(){
      $scope.doSearch = !$scope.doSearch;
    }
    $scope.edit = function(){
      $scope.editMode=true;
    }
    $scope.save = function(){
      $scope.editMode=false;
      CrmService.update($scope.curContact);
    }

    $scope.contactFilter = function(contact) {
      console.log(contact);
      return (contact.tcm_basic_contact.name.indexOf(searchTerm) !== -1);
    }
    $scope.updateCur = function(contact){
      $scope.curContact=contact;
    }
  }
})();
