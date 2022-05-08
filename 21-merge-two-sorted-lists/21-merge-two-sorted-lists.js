/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // need to compare the values of each list node. - headOne and headTwo
    // which ever is smaller will be the head of the new linked list. the next value we need to check pointer 1.next.val vs pointer 2.val and continue until this.next === null
    if (list1 === null || list2 === null) return list1 === null ? list2 : list1;
    let p1 = list1.val > list2.val ? list2 : list1;
    let p2 = p1 === list1 ? list2 : list1;
    let head = p1;
    
    while (p1.next !== null && p2 !== null) {
        if (p1.next.val <= p2.val) { // if the smaller pointers next node val is less than larger pointer value
            p1 = p1.next; // we just move ahead one spot in p1
        } else {
            // if p2.val < p1.next.val, we need to insert p2 in between p1 and p1.next without losing reference to p1.next
            let temp = p1.next;
            p1.next = p2;
            p2 = temp;
            
        }
        
    }
    p1.next = p2;
    return head;
    
};