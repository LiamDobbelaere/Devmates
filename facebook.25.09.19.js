function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

let tree = new Node(1, new Node(2), new Node(3));
let tree2 = new Node(-10, new Node(9), new Node(20, new Node(15), new Node(7)));

function maxPathSum(node, max = -Infinity) {
  if (!node) {
    return {
      max: max,
      sum: 0
    };
  }

  let mpsLeft = maxPathSum(node.left, max);
  let mpsRight = maxPathSum(node.right, max);
  let pathSum = node.value + mpsLeft.sum + mpsRight.sum;

  max = Math.max(max, mpsLeft.max, mpsRight.max, pathSum);

  return {
    sum: Math.max(node.value + mpsLeft.sum, node.value + mpsRight.sum),
    max: max
  };
}

console.log(maxPathSum(tree));
console.log(maxPathSum(tree2));
