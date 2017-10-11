// 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.

/*PSEUDOCODE
  1) Create two variables, pos1 and pos2
  2) Make pos1 move k nodes forward iteratively
  3) When the previous loop stops, make both of them move forward together at the same time until pos1 reaches the end (null)
    3a) Once it reaches the end, pos2 will be at the kth to last position, so return that element.
*/

function LinkedList(){
  this.head = null;
  this.tail = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.addToHead = function(value){
  var newNode = new Node(value)
  if (this.head){
    newNode.next = this.head;
    this.head = newNode;
    console.log('head exists')
  } else {
    this.head = newNode;
    this.tail = newNode;
  }
}

LinkedList.prototype.returnKthToLast = function(k){
  var pos1 = this.head;
  var pos2 = this.head;

  for (var i = 0; i < k; i++){
    pos1 = pos1.next;
  }

  while (pos1 !== null){
    pos1 = pos1.next;
    pos2 = pos2.next
  }

  return pos2;
}