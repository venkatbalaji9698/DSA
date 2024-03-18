class Stack {
  constructor() {
    this.arr = [];
  }

  push(val) {
    return this.arr.push(val);
  }

  pop() {
    return this.arr.pop();
  }
}

const stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(3));
console.log(stack.push(1));
console.log(stack.push(10));
console.log(stack.pop());

// push and pop is best. O(1)
// shift and unshift is worst case. Need to move array 1 pointer to next. O(N)
