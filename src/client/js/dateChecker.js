const checkCity = (input) =>{
    var checkInput = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(input);
    return checkInput;
};

export { checkCity }