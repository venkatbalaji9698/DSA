class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function zigZagLevelOrderTraversal(rootNode) {
  if (!rootNode) return [];

  const data = [];
  let level = 0;

  function traverseNode(nodes) {
    const nextNodes = [];
    data[level] = [];

    for (var i = 0; i < nodes.length; i++) {
      data[level].push(nodes[i].val);
    }

    for (var i = nodes.length - 1; i >= 0; i--) {
      if (level % 2 === 0) {
        if (nodes[i].right) {
          nextNodes.push(nodes[i].right);
        }
        if (nodes[i].left) {
          nextNodes.push(nodes[i].left);
        }
      } else {
        if (nodes[i].left) {
          nextNodes.push(nodes[i].left);
        }
        if (nodes[i].right) {
          nextNodes.push(nodes[i].right);
        }
      }
    }

    if (nextNodes.length > 0) {
      level++;
      traverseNode(nextNodes);
    }
  }

  traverseNode([rootNode]);

  return data;
}
//         0
//      2    4
//    1    3   -1
//  5   1    6    8

var root = new Node(0);
root.left = new Node(2);
root.right = new Node(4);
root.left.left = new Node(1);
root.right.left = new Node(3);
root.right.right = new Node(-1);
root.left.left.left = new Node(5);
root.left.left.right = new Node(1);
root.right.left.right = new Node(6);
root.right.right.right = new Node(8);
console.log(zigZagLevelOrderTraversal(root));

// below test case is for empty check
console.log(zigZagLevelOrderTraversal(null));
