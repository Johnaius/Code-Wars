

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    let revStr= x.split("").reverse().join("").toLowerCase()
    if(x.toLowerCase() === revStr){
      return true
    }else{
      return false
    }
  }