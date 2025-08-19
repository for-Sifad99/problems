// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.
function reversedString(str) {
  let reserved = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reserved += str[i];
  };
  return reserved;
};

reversedString('hello');// Output: "olleh"


// Problem 2: Count Vowels in a String
// Write a function that counts how many vowels(a, e, i, o, u) are in a given string.
function countValues(str) {
  const lowerCaseStr = str.toLowerCase();

  let count = 0;
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (lowerCaseStr[i] === 'a' || lowerCaseStr[i] === 'e' || lowerCaseStr[i] === 'i' || lowerCaseStr[i] === 'o' || lowerCaseStr[i] === 'u') {
      count++;
    }
  };
  return count;
};

countValues('Programming');// Output: 3


// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome(reads the same forward and backward).
function isPalindrome(str) {
  const lowerCaseStr = str.toLowerCase();
  for (let i = 0; i < lowerCaseStr.length / 2; i++) {
    if (lowerCaseStr[i] !== lowerCaseStr[lowerCaseStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

isPalindrome('madam');// Output: true
