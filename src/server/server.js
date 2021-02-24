const dotenv = require('dotenv');
dotenv.config();
const geoUrl = 'http://api.geonames.org/searchJSON?q=';
const pixaUrl = 'https://pixabay.com/api/?key='
const wbitKey = process.env.KEY_WEATHERBIT;
const userName = process.env.USER_NAME;
const pixaKey = process.env.KEY_PIXABAY;

// Setup empty JS object to act as endpoint for all routes
// projectData = {};

const fetch = require('node-fetch');
// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Initialize the main project folder
app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// GET route returns projectData object
app.get("/all", (req, res) => {
    res.send(projectData);
});

//Get the data from client 
app.post('/addWeather', async (req, res) => {
    let city = req.body.city;
    let today = new Date().getTime();
    let departure = new Date(req.body.departure).getTime();
    let returnDate = new Date(req.body.return).getTime();
    let days = (departure - today);
    let howLong = (returnDate - departure);
    totalDays = Math.ceil(days / (1000 * 3600 * 24));
    duration = Math.ceil(howLong / (1000 * 3600 * 24));

    // Pass the city to geonames to retrieve latitude and longitude    
    const response = await fetch(`${geoUrl}${city}&maxRows=1&username=${userName}`);

    try {
        //get the response convert to json, add new data to projectData object
        const data = await response.json();
        newData = {
            destination: city,
            todayDate: today,
            daysLeft: totalDays,
            duration: duration,
            lat: data.geonames[0].lat,
            lon: data.geonames[0].lng,
            cityName: data.geonames[0].toponymName,
            country: data.geonames[0].countryName

        };
        projectData = newData;

        console.log(data);
    } catch (error) {
        console.log("There's a problem getting info from Geonames", error);
    };

    try {
        let wbitUrl;
        //Change Weatherbit Api endpoint based on the number of days until trip to get current or forecast weather
        if (totalDays > 0 && totalDays < 7) {
            wbitUrl = 'https://api.weatherbit.io/v2.0/current?';
        } else {
            wbitUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
        };
        console.log(wbitUrl);
        //Pass lon and lat to Weatherbit, get the weather info and add to projectData
        const weatherBitData = await fetch(`${wbitUrl}lat=${projectData.lat}&lon=${projectData.lon}&key=${wbitKey}&units=I`);
        const weather = await weatherBitData.json();
        projectData.weather = weather;
        console.log(projectData);

    } catch (error) {
        console.log("There's a problem getting info from Weatherbit", error);
    };
    //Get picture from Pixabay and add to projectData
    try {
        const pixaData = await fetch(`${pixaUrl}${pixaKey}&q=${projectData.cityName}&image_type=photo`);
        const img = await pixaData.json();
        projectData.pixabay = img;
        //Send projectData object as response      
        res.send(projectData);

    } catch (error) {
        console.log("There's a problem getting info from Pixabay", error)
    }
});
module.exports = app
// app.listen(port, () => {
//     console.log(`server is running on port ${port}`);
// });


