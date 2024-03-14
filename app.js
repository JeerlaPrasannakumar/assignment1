(function() {
  'use strict';

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.checkLunch = function() {
      if (!$scope.lunchItems) {
        $scope.message = "Please enter data first";
        $scope.messageStyle = { color: 'red' };
        $scope.buttonStyle = { 'border-color': 'red' };
        return;
      }

      var items = $scope.lunchItems.split(',');
      var itemCount = items.filter(item => item.trim() !== '').length;

      if (itemCount <= 3) {
        $scope.message = "Enjoy!";
        $scope.messageStyle = { color: 'green' };
        $scope.buttonStyle = { 'border-color': 'green' };
      } else {
        $scope.message = "Too much!";
        $scope.messageStyle = { color: 'green' };
        $scope.buttonStyle = { 'border-color': 'green' };
      }
    };
  }
})();
