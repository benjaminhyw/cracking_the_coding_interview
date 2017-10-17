// 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e. any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.

// EXAMPLE

// Input: the node c from the linked list a -> b -> c -> d -> e -> f
// Result: nothing is returned, but the new linked list looks like a -> b -> d -> e -> f

/*PSEUDOCODE
  1) Iterate through the entire linked list
  2) If node.value == givenValue, remove that node
    2a) If linked list only has one or two nodes, just return the linked list as is
    2b) Otherwise, since it's singly we have to keep a temp variable for node.next.value
      2ba) By doing this, if we see that the next value is the one we need to remove, we can tell current node.next = currentNode.next.next, and that's it
  3) Return array
*/

function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  var newNode = new Node(value)
  var currentNode = this.head;

  if (!this.head){
    this.head = newNode;
    this.tail = newNode;
  } else {
    while (currentNode.next){
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.tail = newNode;
  }
}

// This method works if we had access to this.head, but the instructions ask for us to solve without access to it

// LinkedList.prototype.deleteMiddleNode = function(value){
//   var currentNode = this.head;
//   var nextNode = currentNode.next;

//   if (this.head.value === value || this.tail.value === value){
//     return this;
//   }
//   while (currentNode){
//     if (nextNode.value === value){
//       currentNode.next = nextNode.next;
//       return this
//     }
//     currentNode = currentNode.next;
//   }
// }

/*
  NOTES:: So in order to create a deleteMiddleNote that doesn't use this.head, you have to have the entire node information inside the parameter (either as a variable, or the full node object).  It is essential for there to be a next node specified, otherwise this doesn't work.
  
  The way this function works is:
    We are given the node that we're supposed to remove.  So what we do, is we simply make that nodes values the next nodes values.  
      The reason for this, is: since we can't access the previous node, we can only move forward.  We can't literally delete this node we are given, so we just have to overwrite that node and all of the next ones, with the currentNodes.next info.
    We do this up until we no longer have a currentNode.next, in which we just assign that a value of null.
*/

LinkedList.prototype.deleteMiddleNode = function(node) {
  var currentNode = node;
  while (currentNode.next) {
    currentNode.value = currentNode.next.value;
    if (!currentNode.next.next) {
      currentNode.next = null;
      return this;
    } else {
      currentNode = currentNode.next;
    }
  }
}

var m1 = this.head;
var m2 = m1.next;
var m3 = m2.next;