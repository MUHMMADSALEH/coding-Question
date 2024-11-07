function longestPalindrome(s) {
    // Step 1: Count the occurrences of each character
    const charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    let length = 0;
    let hasOdd = false;

    // Step 2: Calculate the length of the longest palindrome
    for (let count of Object.values(charCount)) {
        // If count is even, add it fully to the length
        if (count % 2 === 0) {
            length += count;
        } else {
            // If count is odd, add the largest even number less than the count
            length += count - 1;
            hasOdd = true;
        }
    }

    // Step 3: Check if we can place an odd character in the middle
    if (hasOdd) {
        length += 1;
    }

    return length;
}

// Example 1
const s1 = "abccccdd";
console.log(longestPalindrome(s1)); // Output: 7

// Example 2
const s2 = "a";
console.log(longestPalindrome(s2)); // Output: 1
