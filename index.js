// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
function reversedString(str) {
  let reserved = '';

  // loop from last index to first
  for (let i = str.length - 1; i >= 0 ; i--) {
   reserved += str[i];
  };
  return reserved;
};

reversedString('hello');// Output: "olleh"


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels(a, e, i, o, u) are in a given string.
function countValues(str){
  const lowerCaseStr = str.toLowerCase();

  let count = 0;
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if(lowerCaseStr[i] === 'a' || lowerCaseStr[i] === 'e' || lowerCaseStr[i] === 'i' || lowerCaseStr[i] === 'o' || lowerCaseStr[i] === 'u') {
      count++;
    }
  };
  return count;
};

countValues('Programming');// Output: 3
