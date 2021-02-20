// const input = document.querySelector('#city').value;
const checkCity = (city) => {
    
    var checkInput =/^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(city);
    return checkInput;

    
};

export { checkCity }