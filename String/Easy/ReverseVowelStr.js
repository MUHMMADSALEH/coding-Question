var reverseVowels = function(s) {
    let vowels = "aeiouAEIOU";
    let sArr = s.split(''); // Convert the string to an array
    let j = s.length - 1;
    let i = 0;
  
    while (i < j) {
      if (vowels.includes(sArr[i])) {
        if (vowels.includes(sArr[j])) {
          let temp = sArr[i];
          sArr[i] = sArr[j];
          sArr[j] = temp;
          i++;
          j--;
        } else {
          j--;
        }
      } else {
        i++;
      }
    }
    return sArr.join(''); // Convert the array back to a string
  };
  
  console.log(reverseVowels("hello")); // "holle"
  console.log(reverseVowels("leetcode")); // "leotcede"
  console.log(reverseVowels("aA")); // "Aa"
  