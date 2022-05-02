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


var removeNthFromEnd = function(head, n) {
  // move currentNode n steps into list
    let fast = head, slow = head;
    for (let i = 0; i < n; i++){
        fast = fast.next;
    }
    if (!fast) return head.next
    
    // move both pointers until currentNode reaches the end of the list
    while (fast.next){
       fast = fast.next;
        slow = slow.next
        
    }
    slow.next = slow.next.next;
    return head;
};

