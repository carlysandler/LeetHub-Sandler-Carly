/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let min = 0, max = nums.length - 1;
    
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        if (nums[middle] < target) min = middle + 1;
        else if (nums[middle] > target) max = middle - 1;
        else return middle;
    }
    return min;
    
    
};