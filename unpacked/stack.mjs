// 栈
export const Stack = {
    push(elem) {
        this.items.push(elem);
    },
    pop() {
        return this.items.pop();
    },
    peek() {
        return this.items[this.items.length - 1];
    },
    isEmpty() {
        return !this.items.length;
    },
    clear() {
        this.items = [];
    },
    size() {
        return this.items.length;
    }
}

// 队列
export const Queue = {
    enqueue(e) {
        this.items.push(e);
    },
    dequeue() {
        if (this.isEmpty()) return undefined;
        this.items.shift();
    },
    peek() {
        return this.items[0];
    },
    isEmpty() {
        return !this.items.length;
    },
    size() {
        return this.items.length;
    }
}

// 链表 linked
 const Linked = {
    init() {
        this.length = 0;
        this.head = null;
        console.log(this);
    },
    Node(val, next = null) {
        val = val;
        next = next;
        console.log(this);
    },
    get(index) {
        const currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.val;
    },
    addAtHead(val) {
        const newHead = this.Node(val, this.head);
        this.head = newHead;
        this.length++;
    }

}

let linkedList = Object.create(Linked);
linkedList.init();
linkedList.addAtHead(1);

//console.log(linkedList.get(0));
console.log('Linked',Linked);
console.log('@',linkedList);