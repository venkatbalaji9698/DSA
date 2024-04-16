class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// done using two pointers
function deleteMiddleNode(head) {
  if (!head || !head.next) return null;

  var slow = head;
  var fast = head.next;

  while (true) {
    if (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      break;
    }
  }

  slow.next = slow.next.next;

  return head;
}

var head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log(deleteMiddleNode(head));
