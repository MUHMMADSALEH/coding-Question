
// https://leetcode.com/problems/find-the-difference/


// method 1
// function findTheDifference(s, t) {
//     let result = 0;
//     for (let char of s) {
//         result ^= char.charCodeAt(0);
//     }
//     for (let char of t) {
//         result ^= char.charCodeAt(0);
//     }
//     return String.fromCharCode(result);


//< -------method 2----->

// const charCodeSum = str => Array.from(str).reduce((sum, char) => sum + char.charCodeAt(0), 0);
// return String.fromCharCode(charCodeSum(t) - charCodeSum(s))
;
// }

console.log(findTheDifference("abcd","aabcd"))