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
    return current;
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
    return this.head;
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

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currenIndex = 0;
    let current = this.head;
    while (current) {
      if (index === currenIndex) {
        return current;
      }
      current = current.next;
      currenIndex++;
    }
  }

  set(val, index) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      const newNode = new Node(val);
      const prevNode = this.get(index - 1);
      const tempNext = prevNode.next;
      prevNode.next = newNode;
      newNode.next = tempNext;
      this.length++;
    }

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.get(index - 1);
    const removableNode = prevNode.next;
    prevNode.next = removableNode.next;
    this.length--;
    return removableNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prevNode = null;
    let nextNode;

    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = prevNode;
      prevNode = node;
      node = nextNode;
    }

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;

    while(current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

const li = new SinglyLinkedList();
console.log(li.push(1));
console.log(li.push(2));
console.log(li.push(3));
console.log(li.pop());
console.log(li.shift());
console.log(li.unshift(0));
console.log(li.get(2));
console.log(li.set(5, 0));
console.log(li.insert(4, 1));
console.log(li.remove(2));
console.log(li.reverse());
li.print();
