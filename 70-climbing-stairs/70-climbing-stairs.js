/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1 || n === 2) return n;
    
    let first = 1;
    let second = 2;
    for (let i = 3; i <= n; i++){
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
    
    //dp[n] = dp[n - 1] + dp[n - 2]
};
/*
Time complexity : O(n) Single loop upto nn is required to calculate n^{th}n 
th
  fibonacci number.

Space complexity : O(1) Constant space is used
*/
/*
Recursion

climbStairs(n) returns the total number of different ways of taking n steps.
Hence, climbStairs(n-1) + climbStairs(n-2) gives the result
since we can either climb 1 or 2 steps

For more optimised solution, we use an Array to keep track of results that have already been computed
*/

// var climbStairs = function(n, memo = new Array()) {
//     if (n === 1) {
//         return 1;
//     }
//     if (n === 2) {
//         return 2;
//     }
//     if (memo[n] !== undefined) {
//         return memo[n];
//     }
//     let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
//     memo[n] = res;
//     return res;
//     // T.C: O(N)
//     // S.C: O(N)
// };