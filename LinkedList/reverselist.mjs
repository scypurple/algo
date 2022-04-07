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

const reverseList2 = head => {
    if (!head || !head.next) return head;
    const newHead = reverseList2(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

// test
let linkedlist = new LinkedList();
linkedlist.add([1,2,3,4,5]);
let head = linkedlist.head;
//console.log(reverseList(head));
console.log(reverseList2(head));