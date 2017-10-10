// 1.2 Check Permutation:  Given two strings, write a method to decide if one is a permutation of the other.

/*PSEUDOCODE
  1) Define what a permutation is:
    1a) They are two different strings but, both use the exact same characters (including count)
  2) Check the string length of each one.  If it's different even by one mark, return false.
  3) Use a hash table, one for both.
    3a) Count the number of times each character shows up per word
  4) Compare hash tables
*/

/* 
This was my initial response, and it works but it's more code than needs to be.  In the refactored version, we'll simply sort the sentences and compare them to each other.  We'll still check for array.length to be the same.. but technically, a permutation means the sentences are the same except for different character placement in the sentence.  Sorting and comparing is all you really need to do.
*/

// function checkPermutation(string1, string2){
//   var string1Arr = string1.split("").sort();
//   var string2Arr = string2.split("").sort();

//   var string1Obj = {};
//   var string2Obj = {};

//   if (string1Arr.length != string2Arr.length){
//     return false;
//   } else {
//     var arrSize = string1Arr.length
//   }

//   // This same loop can be use for both string1Obj and string2Obj because we've already tested to make sure that they are the same length.  If they share the same length, then arrSize is appropriate for each one, regardless of which of the two arrays we used .length() on.
//   for (var i = 0; i < arrSize; i++){
//     // String 1 logic
//     var string1CurrentChar = string1Arr[i];
//     if (!string1Obj[string1CurrentChar]){
//       string1Obj[string1CurrentChar] = 0;
//     }
//     string1Obj[string1CurrentChar]++;

//     // String 2 logic
//     var string2CurrentChar = string2Arr[i];
//     if (!string2Obj[string2CurrentChar]){
//       string2Obj[string2CurrentChar] = 0;
//     }
//     string2Obj[string2CurrentChar]++;
//   }

//   // JSON.stringify will convert a JavaScript value to a JSON string, allowing you to compare two objects like this.
//   return JSON.stringify(string1Obj) == JSON.stringify(string2Obj);
// }

function checkPermutation(string1, string2){
  var string1Arr = string1.split("").sort()
  var string2Arr = string2.split("").sort()

  if (string1Arr.length != string2Arr.length){
    return false;
  } else {
    return string1Arr.join("") === string2Arr.join("");
  }
}