function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
function mult(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}

// module.exports = {add, sub, mult, divide}
module.exports = {
    addFun:add, 
    subFn:sub, 
    multFn:mult, 
    divideFn:divide}