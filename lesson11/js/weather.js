//Preston Page
const cityid = "5604473";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8f806e2b6239d7e309c5ca0798079e25&units=imperial"

fetch(apiURL)
.then((response)=>response.json())
.then((jsObject)=>{ 
    document.getElementById('current').textContent = jsObject.main.temp.toFixed(1);
    document.getElementById('condition').textContent = jsObject.weather[0].description;
    document.getElementById('high').textContent = jsObject.main.temp_max;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('wind').textContent = jsObject.wind.speed;

});

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8f806e2b6239d7e309c5ca0798079e25&units=imperial"
fetch(forecastURL)
.then((response)=>response.json())
.then((jsObject)=>{ //console.log(jsObject);

   
    const fivedaysForecast = jsObject.list.filter( forecast => forecast.dt_txt.includes('18:00:00'));
    const weekday = ['sun','mon','tue','wed','thu','fri','sat'];

    console.log(fivedaysForecast);

    fivedaysForecast.forEach( element => {
        let i= 0;
        let d = new Date(element.dt_txt);
        let name = d.getDay();
        let displayDay = weekday[name]; 
       
    const div = document.createElement('div');
    div.className = 'forecast';
    const days = document.createElement('p');
        days.setAttribute = ('id','dayname');
        days.textContent = displayDay;
        //console.log(displayDay);

    const ft = document.createElement('p');
        ft.className = 'hightemp';
        ft.textContent = `${element.main.temp.toFixed(0)}°`;  
         
        //console.log(temp);
        const imagesrc = `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`; 
        const desc = element.weather[0].description; 
        let icon = document.createElement('img');
        icon.setAttribute('src', imagesrc);  // focus on the setAttribute() method
        icon.setAttribute('alt', desc);
        div.append(days, icon, ft);
        document.querySelector('div.dailyweather').appendChild(div); 

        i++
        });   

        });
