// WAP to find sum of the elements of Array that's Appears Once

function sumOfEleAppearsOnce(arr) {
  const freqOfElement = new Map();
  arr.forEach((element) => {
    if (freqOfElement.has(element)) {
      freqOfElement.set(element, freqOfElement.get(element)+ 1);
    } else {
      freqOfElement.set(element, 1);
    }
  });
  console.log(freqOfElement)
  let sum = 0;
  freqOfElement.forEach((count,element) => {//this foreach iterating over map where first arguement is value(count) and second arguemenrt is key(element)
    // console.log(index,element)
    // console.log(freqOfElement.get(element))
    if (count === 1) {
      sum += element;
    }
  });
  return sum;
}
console.log(sumOfEleAppearsOnce([1,3,4,5,6,1]))