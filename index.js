function isPalindrome(word) {
  // Write your algorithm here
  let backWord = word.split('').reverse().join('');
  if( word === backWord){
    console.log(true)
    return true;
  } else {
    console.log(false)
    return false;
  }
}

isPalindrome('abba')
/* 
  Add your pseudocode here
  ----
  Get the passed argument which is named word. 
  Turn the word into an array by splitting it 
  then reverse the array
  then turn the array into string again by using join method 
  and assign them to the backWord variable 
  If word equal to backWord return true 
  else it is not equal to backWord return false.
  ----
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
