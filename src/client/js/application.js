/* Global Variables */
import {
    checkCity,
    checkDate,
    checkDuration
} from './inputValidation';
import {
    showForcast,
    removeForecast
} from './forecast';
const button = document.querySelector('#generate');
const departure = document.getElementById('departure');
const returnDate = document.getElementById('return');
const city = document.querySelector('#city');
const url = 'http://localhost:3000/addWeather';
const responseDiv = document.querySelector('#post');
const showData = document.getElementById('showData');
let ul = document.createElement('ul');
ul.id = 'showForecast';
showData.appendChild(ul);
responseDiv.style.display = 'none';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;


function runApp() {
    //Client side input validations 
    const validate = checkCity(city.value);
    const dateValidate = checkDate(departure.value);
    const validDuration = checkDuration(departure.value, returnDate.value);
    if (!validate) {
        alert('Please enter a city name');
    } else if (!dateValidate) {
        alert('Departure date can not be in the past!');
    } else if (!departure.value) {
        alert('Please enetr a departure date');
    } else if (!validDuration) {
        alert('Please enter a valid return date!');
        console.log(validDuration);
    } else {
        responseDiv.style.display = '';
        postData(url, {
            city: city.value,
            departure: departure.value,
            return: returnDate.value
        });

    }
} //runApp end


// Post the data to the local server
const postData = async (path = "", data = {}) => {
    const response = await fetch(path, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    try {

        const allData = await response.json();
        console.log(allData);

        //Conditional statement to call showForecast or remove the DOM elements if they are already exist from
        // the last weather lookup
        if (allData.daysLeft >= 7) {
            if (ul.firstChild) {
                removeForecast(ul);
            }
            showForcast(allData);

        } else {
            removeForecast(ul);

        };
        let tripDuration = '';
        if (!allData.duration) {
            tripDuration = 'Not decided yet';
        } else {
            tripDuration = allData.duration;
        };
        document.querySelector(".new").classList.add("post-color");
        document.querySelector("#date").innerHTML = `<h5>Today:</h5><p class='lg-print'>${newDate}</p>`;
        document.querySelector("#temp").innerHTML = `<h5>Current temperature in ${allData.cityName}, ${allData.country}:</h5> <p class='sm-print'>${allData.weather.data[0].temp}° F with ${allData.weather.data[0].weather.description}</p>
        <p> <img class="icon" src='images/${allData.weather.data[0].weather.icon}.png'></p>`;
        document.querySelector("#user-response").innerHTML = `<h5>Your trip will start in:</h5><p class='sm-print'>${allData.daysLeft} days</p>
        <h5>Trip duration:</h5><p class='sm-print'>${tripDuration}</p>
        <h5>Departure Date:</h5><p class='sm-print'>${departure.value}</p>
        <h5>Return Date:</h5><p class='sm-print'>${returnDate.value}</p>`;
        document.querySelector('#image').innerHTML = `<img class='preview' src=${allData.pixabay.hits[1].webformatURL}>`;


    } catch (error) {
        console.log("error", error);
    }
};
export {
    runApp,
    postData
}