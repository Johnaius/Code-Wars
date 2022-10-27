// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.



function duplicate(str){
    return str.toLowerCase()
    .split('')
    .map((val, i, arr) => arr.indexOf(val) === arr.lastIndexOf(val) ? '(' : ')')
    .join('')
} 


console.log(duplicate("din"), '(((')
console.log(duplicate("recede"), '()()()')
console.log(duplicate("Success"), ')())())')
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 