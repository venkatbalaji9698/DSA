class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function arrayOfFrequency(N) {
  var root = new Node(N);
  const obj = {};

  function addDataToNode(node, val) {
    obj[val] = obj[val] ? obj[val] + 1 : 1;

    if (val > 1) {
      node.left = new Node(val - 1);
      node = node.left;
      addDataToNode(node, val - 1);
    }
    if (val > 2) {
      node.right = new Node(val - 2);
      node = node.right;
      addDataToNode(node, val - 2);
    }
  }

  addDataToNode(root, N);

  var resultArray = [];
  for (var i = 1; i <= N; i++) {
    resultArray.push(obj[i]);
  }

  return resultArray;
}

console.log(arrayOfFrequency(4));
