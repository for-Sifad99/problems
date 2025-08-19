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



