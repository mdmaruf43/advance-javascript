const nums = [1, 3, 4, 5, 6, 7, 4, 3];
const portion = nums.slice(0, 4);
const remove = nums.splice(1, 3, 88, 99);
console.log("Portion: ",portion);
console.log("The Array: ",nums);
console.log("Remove: ", remove);
console.log("The Array: ",nums);
const joinNum = nums.join(",");
console.log(joinNum);