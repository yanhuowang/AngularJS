(function () {
  'use strict';
  angular.module('checkCallingCodeApp', ['ngMessages'])
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