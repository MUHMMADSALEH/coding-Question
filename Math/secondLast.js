function secondLast(arr){
    let largest=Number.NEGATIVE_INFINITY;
    let secondLargest=Number.NEGATIVE_INFINITY;

    for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
          secondLargest=largest
          largest=arr[i]
            
            
        }
        else if(arr[i]!==largest && secondLargest<arr[i]){
secondLargest=arr[i]
        }
       
        
    }
    return secondLargest
}

console.log(secondLast([1,2,3,6,5]))