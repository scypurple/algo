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
import {MyLinkedList as LinkedList, Node as ListNode} from "./linkedlist.mjs";

const mergeTwoLists = (list1, list2) => {
    if (list1 === null || list2 === null) return list1 || list2;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}

// test 
let list1 = new LinkedList();
list1.add([1,2,4]);
let list2 = new LinkedList();
list2.add([1,3,4]);
let head1 = list1.head;
let head2 = list2.head;
let head = mergeTwoLists(head1, head2);
console.log(head);