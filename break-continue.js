const nums = [1, 2, 4, 5, 6];
for(let i = 0; i < nums.length; i++){
    if(nums[i] > 5){
        break;
    }
    //console.log(nums[i]);
}

const numbers = [1, -2, -3, 4, 5, 6];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        continue;
    }
    console.log(numbers[i]);
}