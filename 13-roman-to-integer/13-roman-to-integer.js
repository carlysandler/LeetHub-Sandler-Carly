/**
 * @param {string} s
 * @return {number}
 */

const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
var romanToInt = function(s) {
    let ans = 0;
    for (i = 0; i < s.length - 1; i++){
        if (symbols[s[i]] < symbols[s[i + 1]] && symbols[s[i + 1]]) ans -= symbols[s[i]];
        else ans += symbols[s[i]];
    }
    return ans + symbols[s[s.length - 1]];
    
    
    
};

