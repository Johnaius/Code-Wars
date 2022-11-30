// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

// dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
// dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
// dup(["kelless","keenness"]), ['keles','kenes'])

function dup(arr){
    return arr.map(e=>e.split('')
    .filter((letter,ind,arr) => letter !== (arr[ind+1]))
    .join(''))
}

const assert = require('assert');
describe("Huntober Challenge november 29:", () => {
    it("Test 1", () => { assert.deepEqual(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']) });
    it("Test 2", () => { assert.deepEqual(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']) });
    it("Test 3", () => { assert.deepEqual(dup(["kelless","keenness"]), ['keles','kenes']) });
});