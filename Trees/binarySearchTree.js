class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currrent = this.root;
    while (true) {
      if (val === currrent.val) {
        return undefined;
      }

      if (val < currrent.val) {
        if (!currrent.left) {
          currrent.left = newNode;
          return this;
        }
        currrent = currrent.left;
      } else {
        if (!currrent.right) {
          currrent.right = newNode;
          return this;
        }
        currrent = currrent.right;
      }
    }
  }

  find(val) {
    if (!this.root) {
      return null;
    }

    let current = this.root;
    while (current) {
      if (val === current.val) {
        return current;
      }
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  contains(val) {
    if (!this.root) {
      return false;
    }

    let current = this.root;
    while (current) {
      if (val === current.val) {
        return true;
      }
      if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  BFT() {
    let queue = [];
    let data = [];
    queue.push(this.root);

    while(queue.length) {
      const current = queue.shift();
      data.push(current.val);

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }

    return data;
  }

  DFTPreOrder() {
    let data = [];

    function traverse(node) {
      data.push(node.val);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }

  DFTPostOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.val);
    }

    traverse(this.root);
    return data;
  }

  DFTInOrder() {
    let data = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.val);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.root);
// console.log("result", tree.find(7));
// console.log("result", tree.contains(2));
console.log(tree.BFT());
console.log(tree.DFTPreOrder());
console.log(tree.DFTPostOrder());
console.log(tree.DFTInOrder());

//      10
//    7    15
//  3   8    20