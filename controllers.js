/**
 * Created by aersoz on 1/29/17.
 */

weatherForecast.controller("homeController", ["$scope", "cityService", "$location", function ($scope, cityService, $location) {

    $scope.city = cityService.city;

    $scope.$watch("city", function () {
        cityService.city = $scope.city;
    });

    $scope.submit = function () {
        $location.path("/forecast");

    }

}]);

weatherForecast.controller("forecastController", ["$scope", "cityService", "$routeParams", "weatherService",
    function ($scope, cityService, $routeParams, weatherService) {

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2' ;

    $scope.weatherResults = weatherService.getWeather($scope.city, $scope.days);
    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }

    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);

    };

}]);