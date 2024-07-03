// Write a program that splits a string and count how many times each character appears. The output should
// be sorted by number of times each character appears. if there is a tie by count then the output should be sorted by the character itself alphabetically.

function countAndSortCharacters(str) {
    // Step 1: Count the occurrences of each character
    const charCount = {};
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Step 2: Convert the count object to an array of entries
    const entries = Object.entries(charCount);

    // Step 3: Sort the entries by count and then by character
    entries.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]); // Sort alphabetically if counts are equal
        }
        return b[1] - a[1]; // Sort by count in descending order
    });

    // Step 4: Convert the sorted entries to an array of objects for better readability
    const sortedCharCount = entries.map(([char, count]) => ({ char, count }));//[char,count] are destructured from the array like const[char ,count]=arr

    return sortedCharCount;
}

// Example usage:
const inputString = "hello world";
const result = countAndSortCharacters(inputString);
console.log(result);
/*
Output:
[
  { char: 'l', count: 3 },
  { char: 'o', count: 2 },
  { char: ' ', count: 1 },
  { char: 'd', count: 1 },
  { char: 'e', count: 1 },
  { char: 'h', count: 1 },
  { char: 'r', count: 1 },
  { char: 'w', count: 1 }
]
*/
// Sure! Let's break down the sorting function visually with an example. Suppose we have the string "hello world", and the character counts are as follows:

// javascript
// Copy code
// {
//   'h': 1,
//   'e': 1,
//   'l': 3,
//   'o': 2,
//   ' ': 1,
//   'w': 1,
//   'r': 1,
//   'd': 1
// }
// After converting the object to an array of entries, we get:

// javascript
// Copy code
// [
//   ['h', 1],
//   ['e', 1],
//   ['l', 3],
//   ['o', 2],
//   [' ', 1],
//   ['w', 1],
//   ['r', 1],
//   ['d', 1]
// ]
// Sorting Process
// We will use the sort method with a custom comparator function:

// javascript
// Copy code
// entries.sort((a, b) => {
//     if (a[1] === b[1]) {
//         return a[0].localeCompare(b[0]); // Sort alphabetically if counts are equal
//     }
//     return b[1] - a[1]; // Sort by count in descending order
// });
// Step-by-Step Visual Explanation
// Compare Entries by Count:

// Compare the count values of each pair of entries.
// If counts are different, sort by count in descending order.
// If counts are equal, proceed to compare the characters alphabetically.
// Sorting Examples:

// Comparing ['h', 1] and ['e', 1]:

// Counts are equal (both are 1).
// Compare characters alphabetically: 'h'.localeCompare('e') returns 1 because 'h' comes after 'e'.
// So, ['e', 1] comes before ['h', 1].
// Comparing ['l', 3] and ['o', 2]:

// Counts are different (3 and 2).
// Sort by count: 3 is greater than 2, so ['l', 3] comes before ['o', 2].
// Comparing ['h', 1] and [' ', 1]:

// Counts are equal (both are 1).
// Compare characters alphabetically: 'h'.localeCompare(' ') returns 1 because 'h' comes after ' '.
// So, [' ', 1] comes before ['h', 1].
// Result of Sorting
// After sorting, the array of entries becomes:

// javascript
// Copy code
// [
//   ['l', 3],
//   ['o', 2],
//   [' ', 1],
//   ['d', 1],
//   ['e', 1],
//   ['h', 1],
//   ['r', 1],
//   ['w', 1]
// ]
// Detailed Visualization
// Initial Array:
// javascript
// Copy code
// [
//   ['h', 1], ['e', 1], ['l', 3], ['o', 2], [' ', 1], ['w', 1], ['r', 1], ['d', 1]
// ]
// Step-by-Step Comparisons:

// ['h', 1] vs. ['e', 1] -> ['e', 1], ['h', 1]
// ['l', 3] vs. ['o', 2] -> ['l', 3], ['o', 2]
// ['h', 1] vs. [' ', 1] -> [' ', 1], ['h', 1]
// And so on...
// Sorted Array:

// javascript
// Copy code
// [
//   ['l', 3], ['o', 2], [' ', 1], ['d', 1], ['e', 1], ['h', 1], ['r', 1], ['w', 1]
// ]
// Final Result in Object Form
// After converting the sorted entries back to an object, we get:

// javascript
// Copy code
// {
//   'l': 3,
//   'o': 2,
//   ' ': 1,
//   'd': 1,
//   'e': 1,
//   'h': 1,
//   'r': 1,
//   'w': 1
// }
// This visual and step-by-step explanation should help you understand how the sorting function works.