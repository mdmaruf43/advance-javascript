function add(){
    console.log([...arguments]);
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        element = arguments[i];
        sum = sum + arguments[i];
    }
    return sum;
}

const result = add(2, 4, 6, 5);
console.log(result);