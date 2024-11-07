// https://leetcode.com/problems/first-unique-character-in-a-string//**
//  * @param {string} s
// * @return {number}
// */

// brute force
var firstUniqChar = function(s) {
   let charCount={}
   
   for(let i=0;i<s.length;i++){
      let char=s.charAt(i)
      charCount[char]?charCount[char]++:charCount[char]=1;
   }
   
   for(let key in charCount){
       if(charCount[key]==1){
           return s.indexOf(key)
       }
   }
   return -1
};

//optimize 
// var firstUniqChar = function(s) {
//     let arr = new Array(26).fill(0);
//     for (let i = 0; i < s.length; i++){
//         arr[s.charCodeAt(i) - 97]++;
//     }
//     for (let i = 0; i < s.length; i++){
//         if (arr[s.charCodeAt(i)-97] === 1){
//             return i;
//         }
//     }
//     return -1;
// };



console.log(firstUniqChar("aabb"))