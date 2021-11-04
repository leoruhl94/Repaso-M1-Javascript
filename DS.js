function Node(value){
    this.value = value;
    this.next = null;
  }
  
  function LinkedList(){
    this.head = null;
    this.length = 0; 
  }
  
  function OrdenedLinkedList(){
    this.head = null;
    this.length = 0; 
  }
  
  
  
  module.exports = {
    OrdenedLinkedList,
    Queue,
    Node,
    LinkedList,
    BinarySearchTree
  };
  