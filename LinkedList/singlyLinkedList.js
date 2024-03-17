class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let prev = this.head;
    while (current.next) {
      prev = current;
      current = current.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return current.val;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const current = this.head;
    this.head = current.next;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }
    return this;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }
}

const li = new SinglyLinkedList();
console.log(li.push(1));
console.log(li.push(2));
// console.log(li.push(3));
// console.log(li.pop());
// console.log(li.shift());
console.log(li.unshift(0));
// console.log(li);
