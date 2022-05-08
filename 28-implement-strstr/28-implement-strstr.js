/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle.length) return -1;
    let regex = new RegExp(needle, 'g');

    
    return haystack.search(regex);
    
    
};