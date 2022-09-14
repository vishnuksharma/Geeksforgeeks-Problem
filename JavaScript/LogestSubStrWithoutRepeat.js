const lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return;
    let maxLen = 0;
    let start = 0;
    const usedChars = {};
    for( let i = 0; i < s.length; i++) {
        if (usedChars[s[i]] && start <= usedChars[s[i]]){
            start = usedChars[s[i]]+1
        } else {
            maxLen = Math.max(maxLen, i-start + 1)
        }
        usedChars[s[i]] = i;
    }
    
    return maxLen;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
