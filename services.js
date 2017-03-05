/**
 * Created by aersoz on 1/29/17.
 */

weatherForecast.service("cityService",function () {
    this.city = "Brisbane";
});

weatherForecast.service("weatherService", function ($resource) {
    this.getWeather = function (city, days) {

        // sign up https://openweathermap.org/api and place your api key here.
        var apiKey = "APPID=...............";

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?" + apiKey,{callback : "JSON_CALLBACK" }, { get : { method : "JSONP" }});
        return weatherAPI.get({ q : city, cnt : days});

    }
})