// 1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters.  For example, the string aabcccccaaa would become a2b1c5a3.  If the "compressed" string would not become smaller than the original string, your method should return the original string.  You can assume the string has only uppercase and lowercase letters (a-z).

/*PSEUDOCODE:
  1) Create an array
  2) Push each character of the string into the array by iterating through string
  3) Create temporary variables char & charCount
    3a) Whenever a new character is being focused on, change char to that character and reset charCount to 0.
    3b) When it's the same character, increase charCount by one
    3c) When it changes, push the charCount before resetting to 0
  4) Join array
  5) If newStr.length == originalStr.length, return originalStr
    5a) Otherwise, return newStr
*/

function stringCompression(string){
  var stringArr = string.split('');
  var stringLength = string.length;
  var outputArr = [];
  var currentCharCount = 0;

  for (var i = 0; i < string.length; i++){
    var currentChar = stringArr[i];
    if (stringArr[i-1] != currentChar){
      if (currentCharCount >= 1){
        outputArr.push(currentCharCount)
      };
      outputArr.push(currentChar);
      currentCharCount = 1;
    } else if (!stringArr[i+1]) {
      outputArr.push(currentCharCount);
    } else {
      currentCharCount++;
    }
  }

  if (outputArr.length >= stringLength){
    return string;
  } else {
    return outputArr.join('');
  }
}