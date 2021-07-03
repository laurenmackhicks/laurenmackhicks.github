  
fetch('https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&APPID=98cbc04c44e9fc2905a70710f2643e4e')
.then((response) => response.json())
.then((jsObject) => {
    console.log(jsObject);

    let temp = jsObject.main.temp;
    let minTemp = jsObject.main.temp_min;
    let maxTemp = jsObject.main.temp_max;
    let windspeed = jsObject.wind.speed;

    document.getElementById('temp-min').textContent = Math.round(minTemp);
    document.getElementById('temp-max').textContent = Math.round(maxTemp);
    document.getElementById('condition').textContent = jsObject.weather[0].main;
    document.getElementById('wind-speed').textContent = Math.round(windspeed);

    let output = "N/A"
    if (temp <= 50 && windspeed > 3) {
        output = Math.round(35.74 + 0.6215 * temp - 35.75 * windspeed ** 0.16 + 0.4275 * temp * windspeed ** 0.16);
        output += " \xB0F";
    }

    document.getElementById("wind-chill").textContent = output;
});
const apiURL_forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=98cbc04c44e9fc2905a70710f2643e4e"

    fetch(apiURL_forecast)
    .then(response => response.json())
    .then((jsObject) => {
        
        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var data = jsObject.list.filter((element)=>element.dt_txt.includes('18:00:00'));
        var dayOfWeek = document.getElementsByClassName("forecast-day");
        var weatherIcon = document.getElementsByClassName("weatherIcon");
        var tempMax = document.getElementsByClassName("forecast-max");
        var tempMin = document.getElementsByClassName("forecast-min");

        for (var i = 0; i < data.length; i++) {
            var d = new Date(data[i].dt_txt);
            dayOfWeek[i].textContent = weekday[d.getDay()];

            const imagesrc = 'https://openweathermap.org/img/w/' + data[i].weather[0].icon + '.png';
            const description = data[i].weather[0].description;
            weatherIcon[i].setAttribute('src', imagesrc);
            weatherIcon[i].setAttribute('alt', description);

            tempMax[i].innerHTML = Math.round(data[i].main.temp_max) + " &#176;F";
        }
        
        for (var j = 0; j < data.length; j++) {
            var day = new Date(data[j].dt_txt);
            dayOfWeek[j].textContent = weekday[day.getDay()];

            tempMin[j].innerHTML = Math.round(data[j].main.temp_min) + " &#176;F";
        }

    });

    //Soda Springs Java
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&APPID=c1dcfb6c8efcda936d6f6f66d54711d8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('temperatureSoda').textContent = jsObject.main.temp;
    document.getElementById('desSoda').textContent = jsObject.weather[0].description;
    document.getElementById('humiditySoda').textContent = jsObject.main.humidity;
    document.getElementById('windSpeedSoda').textContent = jsObject.wind.speed;
      //Windchill Calc
      //INPUT 
      let temperature = parseFloat(jsObject.main.temp);
      let windspeed = parseFloat(jsObject.wind.speed);
      //PROCESSING
      let windchill = "N/A";
      if (temperature <= 50 && windspeed > 3) {
          windchill = windChill(temperature, windspeed) + "&deg;F";
      }
      //OUTPUT
      document.getElementById("windChill").innerHTML = windchill;
      //windchill calculation function
      function windChill(tempF, speed) {
          windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
          return windchill.toFixed(0);
      }

});

//Fish Haven
const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&APPID=c1dcfb6c8efcda936d6f6f66d54711d8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);
    document.getElementById('temperatureFish').textContent = jsObject.main.temp;
    document.getElementById('desFish').textContent = jsObject.weather[0].description;
    document.getElementById('humidityFish').textContent = jsObject.main.humidity;
    document.getElementById('windSpeedFish').textContent = jsObject.wind.speed;
      //Windchill Calc
      //INPUT 
      let temperature = parseFloat(jsObject.main.temp);
      let windspeed = parseFloat(jsObject.wind.speed);
      //PROCESSING
      let windchill = "N/A";
      if (temperature <= 50 && windspeed > 3) {
          windchill = windChill(temperature, windspeed) + "&deg;F";
      }
      //OUTPUT
      document.getElementById("windChill").innerHTML = windchill;
      //windchill calculation function
      function windChill(tempF, speed) {
          windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
          return windchill.toFixed(0);
      }

});