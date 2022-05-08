/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function(nums) {
//     let prev = -Infinity
//     let max = prev
//     for(let i = nums.length - 1; i >= 0; i--){
//         prev = Math.max(nums[i], nums[i] + prev)
//         max = Math.max(max, prev)
//     }
//     return max
// };

var maxSubArray = function(nums) {
    let max = nums[0];
    let subArray = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // if current subArray is negative, throw it away. Otherwise keep adding to it
        subArray = Math.max(nums[i], subArray + nums[i]);
        max = Math.max(max, subArray)
    }
    return max;
}