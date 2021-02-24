// checkCity checks the input for city to be string
const checkCity = (city) => {
    var checkInput = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(city);
    return checkInput;

};

//checkDate returns false if the departure date is in the past
const checkDate = (departureDate) => {
    let today = new Date().getTime();
    let departure = new Date(departureDate).getTime();
    let daysToTrip = departure - today;
    let total = Math.ceil(daysToTrip / (1000 * 3600 * 24));
    if (total < 0) {
        return false;
    } else {
        return true
    }
};

//checkDuration returns false if the return date is before the departure
const checkDuration = (dep, ret) => {
    let depDate = new Date(dep).getTime();
    let retDate = new Date(ret).getTime();
    let tripDays = (retDate - depDate);
    const duration = Math.ceil(tripDays / (1000 * 3600 * 24));
    if (duration < 0) {
        return false;
    } else {
        return true
    };

};


export {
    checkCity,
    checkDate,
    checkDuration
}