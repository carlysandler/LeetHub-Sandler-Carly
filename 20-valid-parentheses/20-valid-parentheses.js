/**
 * @param {string} s
 * @return {boolean}
 */
const validBrackets = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
};
const pattern = /[[\](){}]/g

var isValid = function(s) {
    s = s.match(pattern);
    const stack = [];
   for (let i = 0; i < s.length; i++) {
       if (validBrackets.hasOwnProperty(s[i])) stack.push(s[i]);
       else if (validBrackets[stack[stack.length - 1]] === s[i]) stack.pop();
       else return false;
   }
    return !stack.length;
       
      
}
   
