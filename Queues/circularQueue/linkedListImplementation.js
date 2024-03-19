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
      this.rear.next = this.front;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.rear.next = this.front;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.front) {
      console.log("Queue is empty");
      return undefined;
    }

    const removableNode = this.front;
    if (this.front === this.rear) {
      this.front = null;
      this.rear = null;
    } else {
      this.front = removableNode.next;
      this.rear.next = this.front;
    }

    return removableNode.val;
  }

  displayQueue() {
    let currentNode = this.front;
    console.log("Elements in Circular Queue are: ");
    while (currentNode.next !== this.front) {
      console.log(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(currentNode.val);
  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(1);
queue.displayQueue();
queue.dequeue();
queue.displayQueue();
queue.enqueue(10);
queue.enqueue(2);
queue.displayQueue();
queue.dequeue();
queue.displayQueue();

// best and worst case: O(1)
