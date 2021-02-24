//This function will be called if trip starts beyond a week and adds forecast data to the DOM
const showForcast = (data) => {
    const forecastTitle = document.getElementById('forecast-box');
    forecastTitle.innerHTML = `Weather forecast for next two weeks in ${data.cityName}:`;
    let ul = document.getElementById('showForecast');

    for (let i = 0; i < data.weather.data.length; i++) {
        const li = document.createElement('li');
        li.classList.add('forecast');
        const daily = document.createElement('div');
        daily.innerHTML = `
        <img height="50" width="50" src='images/${data.weather.data[i].weather.icon}.png'>
        <h6>${data.weather.data[i].datetime}</h6>
        <h5>${data.weather.data[i].temp}° F</h5>
        <span class="description">high:${data.weather.data[i].high_temp} | low:${data.weather.data[i].low_temp}</span>
        <span class="description">${data.weather.data[i].weather.description}</span>`;
        li.appendChild(daily);
        ul.appendChild(li);
        // console.log(data.weather.data[i].temp);
    };
};
//This function removes forecast data from the DOM so UI won't show the latest forecast if only 
//current weather needs to be shown

const removeForecast = (ul) => {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

};

export {
    showForcast,
    removeForecast
};