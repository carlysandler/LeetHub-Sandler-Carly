/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
	const words = new Set(wordDict);
	const wordLens = new Set(wordDict.map((word => word.length)));
	const starts = new Set([0]);
	
	for (let start of starts) {
		// this dynamically increases with every .add from the latter for loop
		// meaning you can have different starts, as a result of cutting the string with the words u matched
		for (let len of wordLens) {
		// for every unique length of words
		// deals with partial permutations and dupplicates like aa, aaaaa
			if (words.has(s.slice(start, start + len))) { // do we have a word in our dict matching the length of words?
			starts.add(start + len)
			}
		}
	}
	return starts.has(s.length)
}

let s = "catsandog", wordDict = ["cats", "dogs", "sand", "and", "cat"]
wordBreak(s, wordDict)