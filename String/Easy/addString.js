
// https://leetcode.com/problems/add-strings/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let result = '';

    while (i >= 0 || j >= 0 || carry > 0) {
        let n1 = i >= 0 ? Number(num1.charAt(i)) : 0;
        let n2 = j >= 0 ? Number(num2.charAt(j)) : 0;
        
        let sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
        
        i--;
        j--;
    }

    return result;
};

// Example usage:


console.log(addStrings("123", "999")); // Output: "579"
console.log(addStrings("11", "123"));  // Output: "134"