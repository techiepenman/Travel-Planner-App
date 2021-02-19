const checkCity = (input) =>{
    var checkInput = input.match(/^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/);
    if(checkInput == null)
    return false;
else
    return true;

    
};

export { checkCity }