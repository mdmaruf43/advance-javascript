function add(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const add1 = add();
console.log(add1());

console.log(add1());
console.log(add1());
