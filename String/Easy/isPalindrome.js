var isPalindrome = function(s) {
    let normalizedStr=s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase()
    console.log(normalizedStr)
    let i=0;
    let j=normalizedStr.length-1
    while(i<j){

        if(normalizedStr.charAt(i)!=normalizedStr.charAt(j)){
            return false;
        }
        i++;
        j--
    }
    return true;
};

console.log(isPalindrome("race a car"))