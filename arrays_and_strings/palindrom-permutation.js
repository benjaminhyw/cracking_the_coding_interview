// 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome.  A palindrome is a word or phrase that is the same forwards and backwards.  A permutation is a rearrangement of letters.  The palindrome does not need to be limited to just dictionary words.

/*PSEUDOCODE
  1) Define permutation
    1a) Rearrangement of a word, still has the same characters
  2) Define palindrome
    2a) A word that looks the same if flipped backwards
  3) What does this mean for this problem?
    3a) The character counts either all have to be even, or only one odd character
  4) Use a hash table to figure out character count
  5) Go through the hash table and see if the counts follow the rules previously mentioned
  6) Return true if everything passes.  Return false otherwise.
*/

function palindromePermutation(string){
  var characters = 'abcdefghijklmnopqrstuvwxyz'
  var stringArr = string.toLowerCase().split("");
  var characterObj = {};
  var oddCount = 0;

  stringArr.forEach(function(character){
    if (characters.indexOf(character) > -1){
      if (!characterObj[character]){
        characterObj[character] = 0;
      }
      characterObj[character]++;
    }
  })

  for (var key in characterObj) {
    if (characterObj[key] % 2 !== 0){
      oddCount++;
    }
  }

  if (oddCount > 1){
    return false;
  } else {
    return true;
  }
}