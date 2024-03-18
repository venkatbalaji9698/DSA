class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) {
      return undefined;
    }

    const current = this.first;
    this.first = current.next;

    if (!this.first) {
      this.last = null;
    }

    this.size--;
    return current.val;
  }
}

const stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(3));
console.log(stack.push(1));
console.log(stack.push(10));
console.log(stack.pop());
