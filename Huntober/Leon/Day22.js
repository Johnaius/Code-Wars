// Given a string of characters, return the character that appears the most often.



// No String or Array Methods (well brute force it first, but then no methods)! 
// const assert = require('assert');
// describe("Max Character", () => {
//  it("Should return max character", () => { assert.equal(max("Hello World!"), "l") });
// });


function maxCharacters(str){
    letters= {}
    for(const letter of str){
        letters[letter] = letters[letter] +1 || 1;
    }

        highestNum = 0
        
    for(const letter in letters){
        if(letters[letter] > highestNum){
            highestNum = letters[letter]
            property = letter
        }
    }
    
return property
}

maxCharacters('Hello World')