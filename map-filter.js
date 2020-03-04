const numbers = [1, 2, 3, 5, 6, 8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const result = numbers[i] * numbers[i];
//     output.push(result);
// }

// numbers.map(function(element, index, array){
//     console.log(element, index, array);
// }) 

// const result = numbers.map(function(x){
//     return x * x;
// })

// const result = numbers.map(x => x * x);

// console.log(result);

const bigger = numbers.filter(x => x < 4);

const isThere = numbers.find(x => x > 5);
console.log(isThere);
//console.log(bigger);

//console.log(output);