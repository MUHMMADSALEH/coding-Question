// You are given an array of unique numbers.
// Write a script to find out all missing numbers in the range 0..N where N is the array size.
// All the missing numbers should be printed in a single line in ascending order.

function missingNumbers(arr){
    let i=0;
    let missingNums=[]
    while(i<arr.length){
if(!arr.includes(i)){
    missingNums.push(i)
    
}
i++;
    }
    return missingNums
}


console.log((missingNumbers([1,2,3,4,6,7,9,10]).join("   ")))