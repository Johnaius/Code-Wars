// git 
// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s){
    if(s.length % 2 === 0){
      return `${s[Math.floor(s.length / 2) - 1]}`+`${s[Math.floor(s.length/2)]}`
    }else if(s.length % 2 != 0){
      return s[Math.ceil(s.length/2) -1]
    }
    }
   