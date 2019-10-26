function Node(value) {
  this.value = value;
  this.next = null;
}

function nodes2number(node) {
  var multiplier = 1;
  var currentNode = node;
  var acc = 0;

  while (currentNode !== null) {
    acc += currentNode.value * multiplier;
    multiplier *= 10;
    currentNode = currentNode.next;
  }

  return acc;
}

function number2nodes(number) {
  var digits = number.toString().split("");
  var firstNode = new Node(digits[digits.length - 1]);
  var currentNode = firstNode;
  var index = digits.length - 2;

  while (index >= 0) {
    var newNode = new Node(digits[index]);

    currentNode.next = newNode;
    currentNode = newNode;

    index--;
  }

  return firstNode;
}

function addNodes(a, b) {
  var aNum = nodes2number(a);
  var bNum = nodes2number(b);
  return number2nodes(aNum + bNum);
}

var a = number2nodes(456);
var b = number2nodes(378);
console.log(a);
console.log(b);

var result = addNodes(a, b);
console.log(result);
