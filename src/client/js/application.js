/* Global Variables */

// const button = document.querySelector('#generate');
const departure = document.getElementById('departure');
const returnDate = document.getElementById('return');
const city = document.querySelector('#city');
const url = 'http://localhost:3001/addWeather';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;

// Listen for a click on generate button to start the app

// button.addEventListener("click", runApp);

function runApp() {
    // getData(`${url}${zip.value}&appid=${apiKey}`).then(function (data) {
        
    //     console.log(data);
    //     updateUI();
    // });
    postData(url, {  city: city.value , departure: departure.value , return: returnDate.value  });
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
        // const iconAddress = `http://openweathermap.org/img/wn/${allData.weather[0].icon}@2x.png`;

        document.querySelector(".new").classList.add("post-color");
        document.querySelector("#date").innerHTML = `<h5>Today:</h5><p class='lg-print'>${newDate}</p>`;
        document.querySelector("#temp").innerHTML = `<h5>The Latitude in ${allData.geonames[0].name}:<p class='lg-print'>${allData.geonames[0].lat}° and the Longitude is ${allData.geonames[0].lng}</p>`;
        document.querySelector("#user-response").innerHTML = `<h5>Destination:</h5><p class='sm-print'>${city.value}</p>
                                                            <h5>Departure Date:</h5><p class='sm-print'>${departure.value}</p>
                                                            <h5>Return Date:</h5><p class='sm-print'>${returnDate.value}</p>`;
    } catch (error) {
        console.log("error", error);
    }
};

export { runApp, postData }
