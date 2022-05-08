/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // if (m && !n) return nums1;
    // if (!m && n ) return nums2;
    
    let idx1 = m - 1;
    let idx2 = n - 1;
    let idx3 = m + n - 1; // length of nums1 total
    
    // nums1 = [1, 2, 3, 0, 0, 0]
    // nums2 = [2,5,6]
    // output[1,2,2,3,5,6]
    while (idx2 >= 0) {
        nums1[idx3--] = nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
    }
    return nums1;
    
};