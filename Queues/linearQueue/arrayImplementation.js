class Queue {
  constructor() {
    this.arr = [];
  }

  enqueue(val) {
    return this.arr.push(val);
  }

  dequeue() {
    return this.arr.shift();
  }
}

const queue = new Queue();
console.log(queue.enqueue(5));
console.log(queue.enqueue(3));
console.log(queue.enqueue(1));
console.log(queue.enqueue(10));
console.log(queue.dequeue());

// one method is push and shift
// another one is unshift and pop
// both are same, because one method is O(1) and another one method is O(N)
