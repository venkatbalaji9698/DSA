class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.length === 0) {
      return undefined;
    }

    const shiftedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }

    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    if (index <= this.length / 2) {
      let current = this.head;
      let currentIndex = 0;
      while (current) {
        if (index === currentIndex) {
          return current;
        }
        currentIndex++;
        current = current.next;
      }
    } else {
      let current = this.tail;
      let currentIndex = this.length - 1;
      while (current) {
        if (index === currentIndex) {
          return current;
        }
        currentIndex--;
        current = current.prev;
      }
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
      return this.unshift(val);
    }
    if (index === this.length) {
      return this.push(val);
    }

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    prevNode.next = newNode;
    nextNode.prev = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    this.length++;
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

    const removableNode = this.get(index);
    const prevNode = removableNode.prev;
    const nextNode = removableNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removableNode.prev = null;
    removableNode.next = null;
    this.length--;
    return this;
  }
}

const dli = new DoublyLinkedList();
dli.push(1);
dli.push(2);
dli.push(3);
dli.push(4);
dli.push(5);
// dli.pop();
// dli.shift();
// dli.unshift(5);
// console.log(dli.get(2).val);
// console.log(dli.set(10, 1));
console.log(dli.insert(10, 3));
console.log(dli.remove(2));
dli.print();
