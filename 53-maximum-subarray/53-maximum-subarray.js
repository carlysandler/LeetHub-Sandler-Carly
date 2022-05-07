/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev = -Infinity
    let max = prev
    for(let i = nums.length - 1; i >= 0; i--){
        prev = Math.max(nums[i], nums[i] + prev)
        max = Math.max(max, prev)
    }
    return max
};