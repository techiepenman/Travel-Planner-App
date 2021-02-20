/* Global Variables */
import { checkCity } from './dateChecker';
const button = document.querySelector('#generate');
const departure = document.getElementById('departure');
const returnDate = document.getElementById('return');
const city = document.querySelector('#city');
const url = 'http://localhost:3000/addWeather';
const responseDiv = document.querySelector('#post');
responseDiv.style.display = 'none';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;


function runApp() {
    const validate = checkCity(city.value);
    if(validate) {
        responseDiv.style.display = '';
    postData(url, {  city: city.value , departure: departure.value , return: returnDate.value  });
} else {
    alert('Please enter a city name');
}
    // updateUI();
} //runApp end

//Fetch api and return the response in json format
// const getData = async (api) => {
//     const response = await fetch(api);
//     try {
//         const data = await response.json();
//         //  Zip code validation
//         if (response.status !== 200) {
//             alert("Please enter a valid zip code");
//         }
//         return data;
//     } catch (error) {
//         console.log("error", error);
//     }
// };

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
        // const newData = await response.json();
//         console.log(newData);
//         return newData;
//     } catch (error) {
//         console.log("error", error);
//     }
// }; //postData end

// // Update UI dynamically
// const updateUI = async () => {
//     const request = await fetch("/all");
//     try {
        const allData = await response.json();
        console.log(allData);
        const iconAddress = `/images`;

        document.querySelector(".new").classList.add("post-color");
        document.querySelector("#date").innerHTML = `<h5>Today:</h5><p class='lg-print'>${newDate}</p>`;
        document.querySelector("#temp").innerHTML = `<h5>Current temperature in ${allData.cityName}, ${allData.country}:</h5> <p class='sm-print'>${allData.weatherbit.data[0].temp}° F with ${allData.weatherbit.data[0].weather.description} <img src='images/${allData.weatherbit.data[0].weather.icon}.png'></p>`;
        document.querySelector("#user-response").innerHTML = `<h5>Days left to trip:</h5><p class='sm-print'>${allData.daysLeft}</p>
        <h5>Trip duration:</h5><p class='sm-print'>${allData.duration}</p>
        <h5>Departure Date:</h5><p class='sm-print'>${departure.value}</p>
        <h5>Return Date:</h5><p class='sm-print'>${returnDate.value}</p>`;
        document.querySelector('#image').innerHTML = `<img class='preview' src=${allData.pixabay.hits[1].webformatURL}>`;                                                    

        if (allData.daysLeft >= 7) {
            for (let i = 0; i <= allData.weatherbit.data.length; i++) {
                console.log(allData.weatherbit.data[i].temp);
            };
        };
    } catch (error) {
        console.log("error", error);
    }
};
export { runApp, postData }
