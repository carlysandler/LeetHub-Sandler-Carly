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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let q = [root, root];
    if (!root) return true;
    
    
    // while root is not null
    while (q.length) {
        node1 = q.pop();
        node2 = q.pop();
        
        if (node1 === null && node2 === null) continue;
        if (node1 === null || node2 === null) return false; // this will recursively be left vs right to check after first iteration
        if (node1.val !== node2.val) return false;
        
        q.push(node1.left);
        q.push(node2.right);
        q.push(node1.right);
        q.push(node2.left);
                
        
    }
    return true;
    
    
};