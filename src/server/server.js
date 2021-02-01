const dotenv = require('dotenv');
dotenv.config();
const apiBase = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = process.env.API_KEY;
// Setup empty JS object to act as endpoint for all routes
projectData = {};

const fetch = require('node-fetch');
// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
const port = 3001;

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

// POST route receives data from the app and adds it to the projectData object
// app.post("/addWeather", addWeather);

// function addWeather(req, res) {
//     newData = {
//         zip: req.body.zipCode,

//         response: req.body.response,
//     };
//     projectData = newData;
//     res.send(projectData);
//     console.log(projectData);
// }

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});



/////////////////
app.post('/addWeather', async (req, res) => {
    let zip = req.body.zipCode;
    let userResponse = req.body.response;
    console.log(`This is user's input: Zip:${zip} Response:${userResponse}`);
    const response = await fetch(`${apiBase}${zip}&appid=${apiKey}`);
    try {
        //get the response convert to json
        const data = await response.json();
        res.send(data); //send data to server
        console.log(res.status);
        console.log(data);
    } catch (error) {
        console.log("error", error);
    }
})