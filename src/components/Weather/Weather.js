import './Weather.css'

import React from 'react'
import List from '../List/List';



export default function Weather() {

const key = '7ce3b3145a000b5a45368dc8532ede19';
// let btn = document.querySelector('search');
// document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?california')";

function search (e){
    let input1 = document.querySelector('.input_search');
   
    e.preventDefault();
    let city = input1.value;
    getweather(city);
    getweather5(city);
    // document.body.style.backgroundImage = "none";
    document.getElementById('container.body').style.backgroundImage = `url('https://source.unsplash.com/random/1920x1080/?${city}')`;
    
    input1.value = "";
    }

window.addEventListener("load", () => {
let long;
let lat;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`;
        fetch(api)
            .then(response => response.json())
            .then(data => {
                const { name } = data;
                const { id } = data.weather;
                const { description } = data.weather[0];
                const { icon } = data.weather[0].icon;
                const { temp, humidity, pressure } = data.main;
                const { speed } = data.wind;
                
                document.getElementById("city").innerText = "Weather in " + name; 
                document.getElementById("temp").innerHTML = Math.round(temp - 273) + "°C";
                document.getElementById("desc").innerHTML = description;
                document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
                // documegetElementByIdto("icon").innerHTML = icon;
                document.getElementById("humidity").innerHTML = "Humidity : " + humidity + " %";
                document.getElementById("wind").innerHTML = "Wind Speed : " + speed + " km/h";
                document.getElementById("pressure").innerHTML = "Pressure : " + pressure;


                document.body.style.backgroundImage = `url('https://source.unsplash.com/random/1920x1080/?${name}')`;
                
            })

            .catch(err => console.log("Wrong city name."));
    })
} else
    console.log("Position not detected.");

});

const getweather = async (city) => {
try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const data = await response.json();
    const { name } = data;
    const { id } = data.weather;
    const { description } = data.weather[0];
    const { icon } = data.weather[0];
    const { temp, humidity, pressure } = data.main;
    const { speed } = data.wind;

    

    document.getElementById("city").innerText = "Weather in " + name;
    document.getElementById("temp").innerHTML = Math.round(temp - 273) + "°C";
    document.getElementById("desc").innerHTML = description;
    document.getElementById("icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
    // document.querySelector("icon").innerHTML = icon;
    document.getElementById("humidity").innerHTML = "Humidity : " + humidity + " %";
    document.getElementById("wind").innerHTML = "Wind Speed : " + speed + " km/h";
    document.getElementById("pressure").innerHTML = "Pressure : " + pressure;

}
catch (error) {
    alert("city not found");
}
}

function getweather5(city) {

const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`;
fetch(api).then(response => response.json())
    .then(data => {
        const d = new Date((data.list[0].dt_txt));
        let hour = d.getHours();
        let rem = (24 - hour) / 3;

        for (let j = 0; j < 4; j++) {

            for (let i = 8 * j + rem; i < 8 * (j + 1) + rem; i++) {


                (function () {
                    let card = document.getElementById('card')

                    card.innerHTML += `<div id="card-body">
                                 <h6 id="card-date${i}"></h6>
                                 <h5 id="card-title${i}"></h5>
                                 <div id="date${i}"></date>
                                 <img id="icon${i}" src="" alt="icon"></img>
                                 <div id="humidity${i}"></div>
                                 <div id="pressure${i}"></div>
                                 <div id="wind${i}"></div>
                                 </div>`;
                })();

                document.getElementById(`card-date${i}`).innerHTML = data.list[i].dt_txt
                document.getElementById(`card-title${i}`).innerHTML = Math.round(data.list[i].main.temp - 273) + "°C";
                // document.querySelector(`date${i}`).innerHTML = data.list[i].dt_txt;
                document.getElementById(`icon${i}`).src = "http://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
                document.getElementById(`humidity${i}`).innerHTML = "Humidity : " + data.list[i].main.humidity + " %";
                document.getElementById(`wind${i}`).innerHTML = "Wind Speed : " + data.list[i].wind.speed + " km/h";
                document.getElementById(`pressure${i}`).innerHTML = "Pressure : " + data.list[i].main.pressure;

            }
            console.log('after first 8 elements')

        }


    })
    .catch(err => console.log("Wrong city name."));

}

function entered(event) {
    if (event.key === "Enter") {
        console.log('entered')
      event.preventDefault();
    //   document.getElementById("add").addEventListener('click', add());
    //   document.getElementById('place').value = ''
    search(event)
    }
  }
  
  return (
    <div className='weather-body' id='weather-body'> 
    <div className="top-head">
    <List/>
    <div className="container-wrapper">
        <div className="container">
    
        <div className="search-w">
        <input type="text" placeholder="Enter City Name" className="input_search" onKeyDown={entered}/>
        <button id='search'  onClick={search}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1.5em"
                width="0.9em" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z"
                    clip-rule="evenodd"></path>
                <path fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
                    clip-rule="evenodd"></path>
            </svg></button>
    </div>
    <div className="weather">
        <h5 id="city">Weather in city</h5>
        <div id="temp"></div>
        {/* <!-- <img src="" alt="" className="icon"/> --> */}
        <span>
            <div id="desc"></div>
            <img id="icon" src="" alt=""></img>
        </span>
        <div id="humidity"></div>
        <div id="pressure"></div>
        <div id="wind"></div>


    </div>
    
    </div>
    <div className="card" id='card'></div>
    </div>
</div>

</div>

  )
}
