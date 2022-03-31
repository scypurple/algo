// 实现队列
let deque = {
  queue: [],
  enqueue(i) {
    (i instanceof Array) ?
      this.queue.push(...i) : this.queue.push(i);
  },
  dequeue() {
    return this.queue.pop();
  }
}

// hash map
let map = new Map();
map.set('lore', ['alice', 'bob', 'claire']);
map.set('bob', ['anuj', 'peggy']);
map.set('alice', ['peggy']);
map.set('claire', ['thon', 'jonny']);
map.set('anuj', []);
map.set('peggy', []);
map.set('thon', []);
map.set('jonny', []);

const isMango = name => (name.slice(-1) === 'm') ? true : false;
const findMango = (map) => {
  deque.enqueue(map.get('lore'))
  while (deque.queue.length) {
    let name = deque.dequeue();
    if (!name) continue;
    if (isMango(name)) {
      deque.queue = [];
      return `find Mango ${name}`;
    }
    deque.enqueue(map.get(name));
  }
  return "can't find mango!"
}
console.log(deque.queue);
console.log(findMango(map));
