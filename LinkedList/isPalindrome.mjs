// 用链表存储字符串，回文字符串问题
import {MyLinkedList, Node} from "./linkedlist.mjs";

const isPalindrome = head => {
    // 哨兵节点
    let root = new Node(0, head);
    let slow = root;
    let fast = root;
    let i = 0;
    let stack = [];
    while (fast.next) {
        fast = fast.next;
        if (i % 2) {
            slow = slow.next;
            stack.push(slow.val);
        }
        i++;
    }
    if (i % 2) slow = slow.next; // 如果是奇数串，跳过中间节点；
    while (slow.next) {
        slow = slow.next;
        if (slow.val !== stack.pop()) return false;
    }
    return true;
}

let str = "1221"; 
let linkedList = new MyLinkedList();
linkedList.add([...str]);
let head = linkedList.head;
console.log(isPalindrome(head));