(function () {
  'use strict';
  angular.module('checkCallingCodeApp', [])
  .controller('callingCodeController', ['$scope', function($scope) {
    $scope.submitted = false;
    $scope.callingCodeInput = "";
    $scope.callingCodeForm = function() {
      if ($scope.calling_code_form.$valid) {
        // Submit as normal
      } else {
        $scope.submitted = true;
      }
    }
  }]);

})();