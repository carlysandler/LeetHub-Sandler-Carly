/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let nextNonDup = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[nextNonDup - 1] !== nums[i]) {
            // if prev and current arent the same (non-duplicates)
            nums[nextNonDup] = nums[i];
            nums[i] = nextNonDup === i ? nums[i] : "_";
            nextNonDup++;
        }
        
    }
    return nextNonDup;
    
};