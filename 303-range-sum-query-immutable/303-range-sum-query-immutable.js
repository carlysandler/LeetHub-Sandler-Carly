/**
 * @param {number[]} nums
 */
class NumArray {
    constructor(nums){
        this.nums = nums;
    }
    
    sumRange(left, right) {
       let sum = 0;
        while (left < right + 1) {
            sum += this.nums[left];
            left++
        }
        return sum;
        
    }
}

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */


/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */