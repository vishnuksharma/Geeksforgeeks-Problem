const longestRepeatingSubstring = (str) => {
    const n = str.length;
    const set = new Set();
    let ans = 0;
    for(let i=0; i < n; i++) {
        for(let j=0; j < i+1; j++) {
            console.log(str.substr(j, i+1));
            const substr = str.substr(j, i+1);
            if (!set.has(substr)) {
                set.add(substr);
            } else {
                ans = Math.max(ans, substr.length);
            }
        }
    }
    return ans;
}

// console.log(longestRepeatingSubstring("abcd"));
console.log(longestRepeatingSubstring("abbaba"));