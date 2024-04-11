class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(node) {
  var height = 0;
  var maxHeight = 0;

  function processData(node) {
    if (node.left) {
      height++;
      node = node.left;
      processData(node);
    }
    if (node.right) {
      height++;
      node = node.right;
      processData(node);
    }

    if (height > maxHeight) {
      maxHeight = height;
    }

    height--;
  }

  processData(node);

  return maxHeight;
}

var root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.left.left = new Node(1);
root.left.left.left.right = new Node(10);
root.right.left = new Node(6);
root.right.right = new Node(10);
console.log(maxDepth(root));
