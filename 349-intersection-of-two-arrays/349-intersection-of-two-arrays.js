/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let setNums1 = new Set(nums1), setNums2 = new Set(nums2);
    let largeSet = setNums1.size > setNums2.size ? setNums1 : setNums2;
    let smallSet = largeSet === setNums1 ? setNums2 : setNums1;
    let result = [];
    
    smallSet.forEach((num) => {
        if (largeSet.has(num)) result.push(num)
    });
    return result
                     
    
    
    
    
};