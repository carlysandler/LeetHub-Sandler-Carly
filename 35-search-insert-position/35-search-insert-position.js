/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//     let min = 0, max = nums.length - 1;
    
//     while (min <= max) {
//         let middle = Math.floor((min + max) / 2);
//         if (nums[middle] < target) min = middle + 1;
//         else if (nums[middle] > target) max = middle - 1;
//         else return middle;
//     }
//     return min;
    
    
// };

var searchInsert = function(nums, target) {
    let right = nums.length
    if (target < nums[0]) {
        return 0
    }
    
    if (nums[right-1] < target) {
        return right
    }
    let l = 0
    
    while (l < right) {
        if (nums[l] == target || nums[l] > target) {
            return l
        }
        l++
        
    }
}