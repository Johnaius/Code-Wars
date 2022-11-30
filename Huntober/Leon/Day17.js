// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"


function absentVowel(str){
    let vowelArr = ['a', 'e', 'i', 'o', 'u']
   for(let i = 0; i < vowelArr.length; i++)
        if(str.indexOf(vowelArr[i]) === -1){
            return `${i}, missing ${vowelArr[i]}`
        }
    }

const assert = require('assert');
describe("Huntober Challenge november 29:", () => {
    it("Test 1", () => { assert.strictEqual(absentVowel('John Doe hs seven red pples under his bsket'),'0, missing a') });
    it("Test 2", () => { assert.strictEqual(absentVowel('Bb Smith sent us six neatly arranged range bicycles'),'3, missing o') });
});