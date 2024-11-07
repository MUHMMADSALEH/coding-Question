// https://leetcode.com/problems/repeated-substring-pattern/

function repeatedSubstringPattern(s) {
    if (!s) return false;
    let ss = (s + s).slice(1, -1);
    return ss.includes(s);
}

console.log(repeatedSubstringPattern("abab"));
