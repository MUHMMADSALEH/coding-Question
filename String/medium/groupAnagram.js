var groupAnagrams = function(strs) {
    // Create a map to store groups of anagrams
    const map = new Map();
    
    // Iterate through each string in strs
    for (let str of strs) {
        // Sort the string to use as a key in the map
        let sortedStr = str.split('').sort().join('');
        
        // If sortedStr is already a key in the map, push str into the corresponding array
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            // Otherwise, create a new key-value pair
            map.set(sortedStr, [str]);
        }
    }
    
    // Convert map values (arrays of anagrams) to the desired output format
    return Array.from(map.values());
//     Array.from(map.values())
// In JavaScript, Map.prototype.values() returns an iterable object representing the values stored in the Map. It provides a way to access all the values (arrays of anagrams in our case) stored in the Map.
};

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
