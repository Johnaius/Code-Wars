// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

function diamondInTheRough(jewels, stones) {
//    let count= 0
//     for(let j = 0; j < jewels.length; j++){
//         for(let s = 0; s < stones.length; s++){
//             if(jewels[j].includes(stones[s])){
//                 count++
//             }
//         }
//     }
//     return count
let counter = 0;
stones.split('').forEach(element => {
    jewels.indexOf(element) >= 0 ? counter ++ : counter 
});
return counter;

};
console.log(diamondInTheRough("aA","aAAbbbb"), 3)

let counter = 0;
S.split('').forEach(element => {
    J.indexOf(element) >= 0 ? counter ++ : counter 
});
return counter;