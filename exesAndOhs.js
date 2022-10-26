
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    str= str.toLowerCase()
    let oNums = '';
    let xNums = '';
  for (let i = 0; i< str.length; i++){
    if (str[i] === 'x'){
      xNums += str[i]
    }else if(str[i] === 'o'){
      oNums += str[i]
    }
  }
  if(oNums.length === xNums.length){
    return true
  }else{
    return false
  }
}
