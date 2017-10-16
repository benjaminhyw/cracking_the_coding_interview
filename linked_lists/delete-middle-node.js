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