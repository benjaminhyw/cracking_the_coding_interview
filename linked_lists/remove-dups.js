// 2.1 Remove Dups: Write code to remove duplicates from an unsorted linked list.

// FOLLOW UP:  How would you solve this problem if a temporary buffer is not allowed?

/*PSEUDOCODE
  1) Create a hash table to pass in the values of the linkedlist
  2) If LinkedList is empty or only has one value, return LinkedList
  3) If value already exists, make the currentNode.prev point to currentNode.next, and currentNode.next point to currentNode.prev
  4) Else, create value key in hash table
  5) Return final LinkedList
*/