/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";
    
    // iterate over each string in the array
    let strPrefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(strPrefix)) {         
            strPrefix = strPrefix.substring(0, strPrefix.length - 1);
            if (!strPrefix.length) return "";
        }
    }
       
    return strPrefix;
    
    
};

// strs = ["flower", "flow", "flight"]