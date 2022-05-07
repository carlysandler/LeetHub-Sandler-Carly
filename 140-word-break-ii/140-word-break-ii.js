/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict, res=[], cur=[]) {
    if (!s.length) return res.push(cur.join(' '));
    for (let word of wordDict) {
        if (!s.startsWith(word)) continue;
        cur.push(word);
        wordBreak(s.slice(word.length), wordDict, res, cur);
        cur.pop()
    }
    return res;
    
};