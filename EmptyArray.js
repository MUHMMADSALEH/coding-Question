// Write a program to empty an array based on execution of rule below:

// if first element of array is smallest remove it.
// else move it to the end of array.
// The program should print the number of times the above rule needs to be applied
// to empty the array. The array shall be provided in STDIN as space seprated numbers.

function EmptyArray(arr) {
  

  let count = 0;

  while (arr.length > 0) {
      if (arr[0] === Math.min(...arr)) {
          arr.shift(); // Remove the first element if it is the smallest
      } else {
          arr.push(arr.shift()); // Move the first element to the end
      }
      count++;
  }
  return count;
}

console.log(EmptyArray([2, 3, 4, 3, 5, 7, 6]));


