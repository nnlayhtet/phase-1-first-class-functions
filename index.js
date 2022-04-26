function receivesAFunction(callbackFunction){
    return callbackFunction();
}
function returnsANamedFunction(){
    return function namedFunction(){return}
}

function returnsAnAnonymousFunction(){
    return function(){return}
}