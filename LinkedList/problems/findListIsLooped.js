class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// done using two pointers
function findListIsLooped(head) {
  var slow = head;
  var fast = head?.next;

  while (true) {
    if (!slow || !fast) {
      return false;
    }

    if (slow === fast) {
      return true;
    }

    slow = slow?.next;
    fast = fast?.next?.next;
  }
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
// head.next.next.next.next.next.next = head.next;
console.log(findListIsLooped(head));
