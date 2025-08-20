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
function removeDuplicates(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    let isExists = false;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (uniqueArr[j] === current) {
        isExists = true;
        break;
      }
    }

    if (!isExists) {
      uniqueArr.push(current);
    }
  }
  return uniqueArr;
};

removeDuplicates([1, 2, 2, 3, 4, 4]); // Output: [1, 2, 3, 4]


// Problem 6: Sum of All Numbers in an Array
// Write a function that returns the sum of all numbers in an array.
function sumOfAllNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  };
  return sum;
};

sumOfAllNumbers([1, 2, 3, 4, 5]); // Output: 15


// Problem 7: Find Even Numbers in an Array
// Write a function that returns all even numbers from a given array.
function findEvenNumbers(numbers) {
  let evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  };
  return evenNumbers;
};

findEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]


// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.
function capitalizeFirstLetter(sentence) {
  let currentWord = "";
  let wordsArr = [];  
  let capitalizedString = ''.trimEnd();

  for (let i = 0; i < sentence.length; i++) {
    let ch = sentence[i];

    if (ch === " ") {
      if (currentWord.length > 0) {
        wordsArr.push(currentWord); 
        currentWord = "";
      }
    } else {
      currentWord += ch; 
    }
  }

  if (currentWord.length > 0) {
    wordsArr.push(currentWord);
  }

  for (let i = 0; i < wordsArr.length; i++) {
      const capLetter = wordsArr[i][0].toUpperCase();
      const word = capLetter + wordsArr[i].slice(1, wordsArr[i].length) + ' ';
      capitalizedString += word;
    };
  return capitalizedString;
};

capitalizeFirstLetter("hello world"); // Output: ["Hello", "World"]


// Problem 9: Find the Factorial of a Number
// Write a function that calculates the factorial of a number using a loop.
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i; 
  }
  return result;
}

factorial(5);  // Output: 120


// Problem 10: PingPong Challenge
// Print numbers 1 to 20 with Ping/Pong rules
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
};

// Run function
pingPong();



