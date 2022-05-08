/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if(map[complement] !== undefined) return [map[complement], i];
        else map[nums[i]] = i;
    }
};


