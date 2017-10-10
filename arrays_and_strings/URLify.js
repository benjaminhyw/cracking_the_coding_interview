// 1.3 URLify: Write a method to replace all spaces in a string with '%20'.  You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the 'true' length of the string.

/*PSEUDOCODE
  1) Create an array, and push each element.. except, '%20' instead of a blank space mark.
  2) Join array
*/

function URLify(string){
  var stringArr = string.split('');
  var newArr = [];

  for (i = 0; i < stringArr.length; i++){
    if (stringArr[i] == " "){
      newArr.push('%20');
    } else {
      newArr.push(stringArr[i])
    }
  }
  return newArr.join('')
}