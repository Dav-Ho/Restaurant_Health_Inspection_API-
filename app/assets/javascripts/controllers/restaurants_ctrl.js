(function () {
  "use strict";

  angular.module("app").controller("restaurants_ctrl", function($scope, $http) {
    function setup() {
      $http.get('https://data.cityofnewyork.us/resource/xx67-kt59.json').then(function(response){
        $scope.restaurants = response.data;
      });
    }
    setup();
  });
})();
