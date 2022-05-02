/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var getCount = function(head){
    let count = 0;
    let cur = head;
    while (cur !== null){
        cur = cur.next;
        count++
    }
    return count;
}
var removeNthFromEnd = function(head, n) {
  
    nodeBeforeRemovedIndex = getCount(head) - n - 1;
    cur = head;
    
    if (getCount(head) === n){
        return head.next;
    }
    for (let i = 0; i < nodeBeforeRemovedIndex; i++){
        cur = cur.next
        
    }
    cur.next = cur.next.next;
    return head;
   
    
   
    
};