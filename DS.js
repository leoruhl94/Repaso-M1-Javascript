function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.length = 0;
}

LinkedList.prototype.add = function (value) {
  let newNode = new Node(value);
  if (!this.head) this.head = newNode;
  else {
    let currentNode = this.head;
    if (currentNode) {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  this.length++;
  return newNode;
};

function OrderedLinkedList() {
  this.head = null;
  this.length = 0;
}

module.exports = {
  OrderedLinkedList,

  Node,
  LinkedList,
};
