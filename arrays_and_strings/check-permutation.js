// 1.2 Check Permutation:  Given two strings, write a method to decide if one is a permutation of the other.

/*PSEUDOCODE
  1) Define what a permutation is:
    1a) They are two different strings but, both use the exact same characters (including count)
  2) Check the string length of each one.  If it's different even by one mark, return false.
  3) Use a hash table, one for both.
    3a) Count the number of times each character shows up per word
  4) Compare hash tables
*/