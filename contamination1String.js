// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char){
  return char.repeat(text.length)
}

// Parameters: "text" is a string of anylength made of characters
// "char" i sa string of length 1

// Results:  string text.length in length made up of char

// Example: see descriptio



