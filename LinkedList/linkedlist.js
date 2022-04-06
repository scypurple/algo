
// 单向链表
class MyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0
    }
    get(index) {
        if (index >= this.length || !this.head) return -1;
        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode.value;
    }
    addAtHead(value) {
        let newHead = new Node(value, this.head);
        this.head = newHead;
        this.length++;
    }
    addAtTail(value) {
        if (!this.length) return this.addAtHead(value);
        let newTail = new Node(value);
        let preNode = this.head;
        for (let i = 0; i < this.length-1; i++) {
            preNode = preNode.next;
        }
        preNode.next = newTail;
        this.length++;
    }
    addAtIndex(index, value) {
        if (index > this.length) return ;
      
      if (index <= 0) {this.addAtHead(value); return;}  
        if (index === this.length) {this.addAtTail(value); return;}
            let preNode = this.head;
            for (let i = 0; i < index-1; i++) {
                preNode = preNode.next;
            }
            let newNode = new Node(value, preNode.next);
            preNode.next = newNode;
        this.length++;
    }
    deleteAtIndex(index) {
        let preNode = this.head;
        if (index >= this.length) return;
        if (index < 0) return;
        if (this.length < 2) return this.head = null;
        if (index === 0) return this.head = this.head.next;
        for (let i = 0; i < index - 1; i++) {
            preNode = preNode.next;
        }
        preNode.next = preNode.next.next;
        this.length--;
    }
    add(array) {
        if (!array instanceof Array) return "array needed";
        array.map((e, i) => {
            this.addAtIndex(i, e);
        })
    }
}

class Node {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// 用链表存储字符串，回文字符串问题
const palindromeStr = head => {
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
console.log(palindromeStr(head));