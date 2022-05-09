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
// var isSymmetric = function(root) {
//     let q = [root, root];
//     if (!root) return true;
    
    
//     // while root is not null
//     while (q.length) {
//         node1 = q.pop();
//         node2 = q.pop();
        
//         if (node1 === null && node2 === null) continue;
//         if (node1 === null || node2 === null) return false; // this will recursively be left vs right to check after first iteration
//         if (node1.val !== node2.val) return false;
        
//         q.push(node1.left);
//         q.push(node2.right);
//         q.push(node1.right);
//         q.push(node2.left);
                
        
//     }
//     return true;
    
// };

// recursive solution

var isSymmetric = function(root) {
    return isMirror(root, root);
}
var isMirror = function(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if (root1 === null || root2 === null) return false;
    return (root1.val === root2.val) 
        && isMirror(root1.left, root2.right)
        && isMirror(root1.right, root2.left);
}