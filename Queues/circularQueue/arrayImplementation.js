class Queue {
  constructor() {
    this.rear = -1;
    this.front = -1;
    this.size = 5;
    this.arr = new Array();
  }

  enqueue(val) {
    if (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.rear === (this.front - 1) % (this.size - 1)
    ) {
      console.log("Queue is Full");
      return false;
    }

    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
      this.arr[this.rear] = val;
    } else if (this.rear === this.size - 1 && this.front !== 0) {
      this.rear = 0;
      this.arr[this.rear] = val;
    } else {
      this.rear++;
      this.arr[this.rear] = val;
    }

    return true;
  }

  dequeue() {
    if (this.front === -1) {
      console.log("Queue is Empty");
      return undefined;
    }

    const data = this.arr[this.front];
    this.arr[this.front] = -1;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.size - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
    return data;
  }

  displayQueue() {
    if (this.front == -1) {
      console.log("Queue is Empty");
      return;
    }

    console.log("\nElements in Circular Queue are: ");
    if (this.rear >= this.front) {
      for (let i = this.front; i <= this.rear; i++) {
        console.log(this.arr[i]);
      }
    } else {
      for (let i = this.front; i < this.size; i++) {
        console.log(this.arr[i]);
      }
      for (let i = 0; i <= this.rear; i++) {
        console.log(this.arr[i]);
      }
    }
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
