// 1.1 Is Unique:  Implement an algorithm to determine if a string has all unique characters.  What if you cannot use additional data structures?

/*PSEUDOCODE
  1) Create Hash Table
  2) Split string into array of single elements
  3) Check the hash table:
    3a) Treat each element as a key.
    3a) If it doesn't exist, make one
    3b) If it does, return false
  4) Return true 
*/

function isUnique(string){
  var stringArr = string.split("");
  var characters = {}

  for (var i = 0; i < string.length; i++){
    var currentChar = stringArr[i]
    if (!characters[currentChar]){
      characters[stringArr[i]] = 0;
    } else {
      return false;
    }
    characters[currentChar]++;
  }
  return true;
}