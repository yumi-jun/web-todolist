const weather=document.querySelector(".js-weather");
const API="4ad1fdfd0170170324230abdf051a61a";
const COORDS='coords';

function getWeather(lan,long){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lan}&lon=${long}&appid=${API}`
    ).then(
        function(response){
            return response.json();
        }
    ).then(
        function(json){
            const temperature=(json.main.temp-273.15).toFixed(2);
            const place=json.name;
            const count=json.sys.country;
            const hum=json.main.humidity
            weather.innerText=`온도:${temperature}습도:${hum} 
                ${place}  In  ${count}`;
        }
    );
}

function handelsuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordObj={
        latitude,
        longitude
    };
    localStorage.setItem(COORDS,JSON.stringify(coordObj));
    getWeather(latitude,longitude);
}

function handlefail(){
    console.log("fail");
}

function askforcoords(){
    navigator.geolocation.getCurrentPosition(handelsuccess,handlefail);
}

function loadcoords(){
    const loadc=localStorage.getItem(COORDS);
    if(loadc===null){
        askforcoords();
    }else{
        const parseloadc=JSON.parse(loadc);
        getWeather(parseloadc.latitude,parseloadc.longitude);
    }
}

function init(){
    loadcoords();
}
init();