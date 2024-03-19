class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.front) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.front) {
      return undefined;
    }

    const currentNode = this.front;
    if (this.size === 1) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = currentNode.next;
    }

    this.size--;
    return currentNode.val;
  }
}

const queue = new Queue();
console.log(queue.enqueue(5));
console.log(queue.enqueue(3));
console.log(queue.enqueue(1));
console.log(queue.enqueue(10));
console.log(queue.dequeue());
console.log(queue.dequeue());

// best and worst case: O(1)
