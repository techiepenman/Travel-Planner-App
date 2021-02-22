const showForcast = (data) => {
   let ul = document.getElementById('showForecast');

   for (let i = 1; i < data.weather.data.length; i++) {
        const li = document.createElement("li");
        li.classList.add("forecast"); 
        const daily = document.createElement("div");
        daily.innerHTML = `
        <img src='images/${data.weather.data[i].weather.icon}.png'>
        <h3>${data.weather.data[i].datetime}</h3>
        <h3>${data.weather.data[i].temp}</h3>
        <span class="email">${data.weather.data[i].weather.description}</span>`;
        li.appendChild(daily);
        ul.appendChild(li);
        console.log(data.weather.data[i].temp);
    };
};

const removeForecast = (ul) => {
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }

};

export { showForcast , removeForecast  };
