// 1.5 One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character.  Given two strings, write a function to check if they are one edit (or zero edits) away.

/*PSEUDOCODE
  1) Compare the two strings.  If they are equal to each other, then there are 0 edits, which makes it pass.
  2) Get the length for each string.  If lengths differ by greater than 1, return false.
  3) Turn the string into an array of characters.  Iterate through them, and see if they exist in the other string.  keep a counter for similar, and for difference.  If difference is greater than 1, return false.
  4) If all tests pass, return true;
*/