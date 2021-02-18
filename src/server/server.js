const dotenv = require('dotenv');
dotenv.config();
// const apiBase = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiBase = 'http://api.geonames.org/searchJSON?q=';
// const wbitFcstUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
let wbitCrntUrl = 'https://api.weatherbit.io/v2.0/';
const pixaUrl = 'https://pixabay.com/api/?key='
const wbitKey = process.env.KEY_WEATHERBIT;
// const apiKey = process.env.API_KEY;
const userName = process.env.USER_NAME;
const pixaKey = process.env.KEY_PIXABAY;

// Setup empty JS object to act as endpoint for all routes
projectData = {};

const fetch = require('node-fetch');
// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
const port = 3000;

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

/* Middleware*/
const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
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


app.post('/addWeather', async (req, res) => {
    let city = req.body.city;
    let today = new Date().getTime();
    let departure = new Date(req.body.departure).getTime();
    let returnDate = new Date(req.body.return);
    let days = (departure - today);
    totalDays = Math.ceil(days/(1000 * 3600 * 24));
    
    // console.log(`wbitapi: ${wbitCrntUrl} This is user's input: City: ${city} Departure Date: ${departure} Return Date: ${returnDate} Total: ${totalDays}`);
    // console.log(`${apiBase}${city}&maxRows=1&username=${userName}`);
    const response = await fetch(`${apiBase}${city}&maxRows=1&username=${userName}`);
    // (`${apiBase}${zip}&appid=${apiKey}&units=imperial`);
    try {
        //get the response convert to json
        const data = await response.json();
        newData = {
            destination : city,
            todayDate: today,
            daysLeft : totalDays,
            lat: data.geonames[0].lat,
            lon: data.geonames[0].lng,
            cityName : data.geonames[0].toponymName,
            country : data.geonames[0].countryName
            
        };
        projectData = newData;
        // res.send(data); //send data to server
        // console.log(res.status);
        console.log(data);
    } catch (error) {
        console.log("There's a problem getting info from Geonames", error);
    }
    try {
        let wbitCrntUrl;
        //Change weatherbit Api endpoint based on the number of trip days 
        if (totalDays > 0 && totalDays < 7) {
            wbitCrntUrl = 'https://api.weatherbit.io/v2.0/current?';
        } else {
            wbitCrntUrl = 'https://api.weatherbit.io/v2.0/forecast/daily?';
        };
        console.log(wbitCrntUrl);
        const weatherBitData =  await fetch(`${wbitCrntUrl}lat=${projectData.lat}&lon=${projectData.lon}&key=${wbitKey}&units=I`);
        const data = await weatherBitData.json();
        projectData.weatherbit = data;
    
        console.log(projectData);
        // res.send(data);
    } catch (error) {
        console.log("There's a problem getting info from Weatherbit", error);
    }
    try {
        const pixaData =  await fetch(`${pixaUrl}${pixaKey}&q=${city}&image_type=photo`);
        const img = await pixaData.json();
      
         projectData.pixabay = img;
        res.send(projectData);
        // console.log(img);
    } catch (error) {
        console.log("There's a problem getting info from Pixabay", error)
    }
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});