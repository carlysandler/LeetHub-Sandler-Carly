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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const node = root, queue = [node], res = [];
    if (!node) return [];
    let curr = 0;
    while (curr !== queue.length) {
        const rowCountofNodes = queue.length - curr, row = [];
        for (let i = 0; i < rowCountofNodes; i++){
            const node = queue[curr];
            row.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            curr++;
        }
        res.push(row);
    }
    return res;
    
    
};