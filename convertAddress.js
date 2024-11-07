// You are given MAC address in the form i.e. hhhh.hhhh.hhhh.

// Write a script to convert the address in the form hh:hh:hh:hh:hh:hh.

// Example 1
// Input:  1ac2.34f0.b1c2
// Output: 1a:c2:34:f0:b1:c2
// Example 2
// Input:  abc1.20f1.345a
// Output: ab:c1:20:f1:34:5a






function convertAddress(address) {
    // Split the input string by "."
    const parts = address.split(".");

    // Use map to convert each part and join them with ":"
    const formattedAddress = parts
        .map(part => part.match(/.{1,2}/g).join(":"))
        .join(":");

    return formattedAddress;
}

// Here's a quick breakdown:

// It splits the address string by "." into an array of parts.
// For each part, it uses .map() with a match(/.{1,2}/g) regex to break it into two-character chunks.
// Then, it joins those chunks with ":".
// Finally, it joins all parts with ":" to create the fully formatted address.

console.log(convertAddress("1ac2.34f0.b1c2")); // Output: 1a:c2:34:f0:b1:c2
console.log(convertAddress("abc1.20f1.345a")); // Output: ab:c1:20:f1:34:5a
