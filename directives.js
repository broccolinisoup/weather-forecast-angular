/**
 * Created by aersoz on 1/29/17.
 */

weatherForecast.directive("forecastResults", function () {

    return {
        restrict : 'E',
        templateUrl : "directives/forecastResults.html",
        replace : true,
        scope : {
            weatherObj : "=",
            formattedTemp : "&",
            formattedDate : "&",
            dateFormat : "@"
        }
    };
})