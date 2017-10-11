// 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.

// FOLLOW UP:  How would you solve this problem if a temporary buffer is not allowed?

/*PSEUDOCODE
  1) Create a hash table to pass in the values of the linkedlist
  2) If LinkedList is empty or only has one value, return LinkedList
  3) If value already exists, make the currentNode.prev point to currentNode.next, and currentNode.next point to currentNode.prev
  4) Else, create value key in hash table
  5) Return final LinkedList
*/

function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.removeDups = function(){
  var valueCount = {};

  // If it's empty || only has one node (which is both the head and tail)
  if (!this.head || (this.head === this.tail)){
    return this;
  }

  var currentNode = this.head;
  while (currentNode){
    var currentValue = currentNode.value;
    var prevNode = currentNode.prev;
    var nextNode = currentNode.next;

    if (!valueCount[currentValue]){
      valueCount[currentValue] = 1;
    } else {
      //If there is no next node, make this.tail = prevNode
      // If it exists, tell the prev and next values to point at each other
      if (nextNode){
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
      } else {
        this.tail = prevNode
        prevNode.next = null;
      }
    }
    currentNode = currentNode.next;
  }

  return this;
}