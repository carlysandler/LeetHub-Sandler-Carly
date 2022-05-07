/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let  maxSum = nums[0], windowSum = Math.max(maxSum, 0)
    for (let windowEnd = 1; windowEnd < nums.length; windowEnd++) {
        windowSum += nums[windowEnd];
        maxSum = Math.max(maxSum, windowSum);
        windowSum = Math.max(windowSum, 0);
        
    }
    return maxSum;
    
};