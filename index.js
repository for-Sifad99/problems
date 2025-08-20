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


// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.
function findMaximum(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

findMaximum([5, 1, 9, 3]); // Output: 9


// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.
function removeDuplicates(arr){
let uniqueArr = [];

for (let i =0; i < arr.length; i++) {
 const current = arr[i];
  let isExists = false;

  for(let j = 0; j < uniqueArr.length; j++){
    if(uniqueArr[j] === current){
      isExists = true;
      break;
    }
  }

  if(!isExists){
    uniqueArr.push(current);
  }
}
return uniqueArr;
};

removeDuplicates([1, 2, 2, 3, 4, 4]); // Output: [1, 2, 3, 4]