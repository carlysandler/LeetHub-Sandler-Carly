/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


// Iterative DFS Solution
var preorderTraversal = function(root) {
    if (!root) return [];
    let stack = [], res = [];
    stack.push(root);
    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return res;
	// Time Complexity: O(n)
    // Space Complexity: O(n)
};
// Recursive DFS Solution
var preorderTraversal = function(root, res = []) {
    if (!root) return [];
    res.push(root.val);
    if (root.left) preorderTraversal(root.left, res);
    if (root.right) preorderTraversal(root.right, res);
    return res;
    // Time Complexity: O(n)
    // Space Complexity: O(n)
}