import { MyLinkedList as LinkedList, Node as ListNode } from "./linkedlist.mjs";

const reverseList = head => {
    let pre = null;
    let cur = head;
    if (!head || !head.next) return head;
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}

// test
let linkedlist = new LinkedList();
linkedlist.add([1,2,3,4,5]);
let head = linkedlist.head;
console.log(reverseList(head));