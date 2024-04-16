class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// done using two pointers
function oddEvenList(head) {
  if (!head || !head.next) return head;

  var lastOddNode = head;
  var lastEvenNode = head.next;

  while (lastEvenNode && lastEvenNode.next) {
    var currentOddNode = lastEvenNode.next;
    lastEvenNode.next = currentOddNode.next;
    currentOddNode.next = lastOddNode.next;
    lastOddNode.next = currentOddNode;

    lastOddNode = lastOddNode.next;
    lastEvenNode = lastEvenNode.next;
  }

  return head;
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(oddEvenList(head));
