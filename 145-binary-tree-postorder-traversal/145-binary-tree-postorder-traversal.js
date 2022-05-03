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
var postorderTraversal = function(root) {
    let res = [], stack = [], curr = root;
    while (curr || stack.length) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }
        if (peek(stack).right) {
            curr = peek(stack).right;
            peek(stack).right = null;
        } else {
             res.push(stack.pop().val)
            
        }
            
    }
    return res;
    
};

var peek = function(stack) {
    return stack[stack.length - 1]
}

// var postorderTraversal = function(root) {
//   let stack = [], result = [], current = root;
  
//   while (current || stack.length) {
//     while (current) {
//       stack.push(current);
//       current = current.left;
//     }
    
//     if (stack[stack.length - 1].right) {
//       current = stack[stack.length - 1].right;
//       stack[stack.length - 1].right = null;
//     } else {
//       result.push(stack.pop().val);
//     }
//   }
  
//   return result;
// };