function rotateByK(arr,k){
// Method-1
// let len=arr.length
// let d=k%len

// const first=arr.slice(0,d)
// const second=arr.slice(d)

// return [...second,...first]

// Method-2

//  const size=arr.length

//  if(k>size){
//     k=k%size
//  }

//  const rotated=arr.splice(size-k,size)
//  console.log("rotatted",rotated)
//   arr.unshift(...rotated)
//   return arr

// optimizedApproach

const size=arr.length

if(k>size){
    k=k%size
}

reverse(arr,0,arr.length-1)
reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
return arr
}


function reverse(arr,left,right){
    while(left<right){
        const temp=arr[left]
        arr[left++]=arr[right]
        arr[right--]=temp
    }
}
console.log(rotateByK([1,2,4,5,3,7,3],2))