const students = [
    {id: 2, name: "Ashik"},
    {id: 3, name: "Toma"},
    {id: 4, name: "Munni"},
    {id: 5, name: "Sakib"}
];

// const output = [];

// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     output.push(element);
// }


const names = students.map(element => element.name);
const biggerIds = students.filter(element => element.id > 3)
const biggerOne = students.find(element => element.id > 3)
console.log(biggerOne);