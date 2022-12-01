// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


function reversedString(str){
    let revStr = ''
   for(let i = 0; i <= str.lenght-1; i++)revStr += str[i];
   revStr.push(revStr)
}

console.log(reversedString('illuminati'), 'itanimulli')