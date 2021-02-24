# Travel Planner

## Overview
This app gets a destination city, departure date and return date from user. Then retrieves data by meking three Api calls asynchronously. 
First the city name gets passed to [Geonames](https://www.geonames.org/)  where some data such as Latitude and Longitude will be obtained to be used for the second Api call to [Weatherbit](https://www.weatherbit.io/api). server. 
The weather information varies based on the days left until the departure date, if the trip begins within a week the current weather for the destination will be shown to the user and if the trip starts beyond a week a forecast for sixteen days will appear on the screen.
The app also make another asynchronous Api call to [Pixabay](https://pixabay.com/api/docs/) to download a picture of the destination and display that.

## Install
- Clone the project
- Install npm ``` npm install ``` in the root directory where the project is located. npm install By doing that, all the dependencies associated with this project will be installed.

## Api keys and user name
The application will need to make calls to the three external servers [Geonames](https://www.geonames.org/), [Weatherbit](https://www.weatherbit.io/api) and [Pixabay](https://pixabay.com/api/docs/) to post and receive data. For security reasons, API keys and usernames are not exposed publicly so you will need to get the credentials from athe mentioned websites. Once the key is obtained, simply create ```.env``` file in the root directory and place the key/username as such:  
```USER_NAME=``` "your username for Geonames"  
```KEY_WEATHERBIT=``` "your Weatherbit api key"   
```KEY_PIXABAY =``` "your Pixabay api key"

## Run  
The app can be executed from the command line. Depends on what environment you like to run the app, the command would be as such:  
- For development mode:  
```npm run build-dev```  
- For production mode:  
```npm run build-prod```    
- Then run the server:
```npm start```
Open the browser and enter:  
```http://localhost:3000```
## Technologies
- #### HTML
- #### Sass
- #### Asynchronous JavaScript
- #### Webpack
- #### Babel
- #### Service Workers
- #### Express
- #### Git, Github

