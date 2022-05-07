/**
 * @param {number[]} nums
 */

var NumArray = function(nums) {
    this.nums = nums;
    this.prefixSums = [0];
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
        this.prefixSums.push(total += nums[i]);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.prefixSums[right + 1] - this.prefixSums[left];
};