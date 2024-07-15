function titleToNumber(columnTitle) {
    let result = 0;

    // Iterate through each character in the string from left to right
    for (let i = 0; i < columnTitle.length; i++) {
        // Calculate the value of the current character
        // 'A' -> 1, 'B' -> 2, ..., 'Z' -> 26
        let value = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        
        // Update the result
        // Multiply the current result by 26 (shift left in base-26)
        // and add the current character's value
        result = result * 26 + value;
    }

    return result;
}

// Test cases
console.log(titleToNumber("A"));   // Output: 1
console.log(titleToNumber("AB"));  // Output: 28
console.log(titleToNumber("ZY"));  // Output: 701
