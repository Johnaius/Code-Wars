// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


function containsDuplicate(nums){
    map = {}
    for(const num of nums){
        map[num] = map[num] +1 || 1
    }
    duplicate = false
    for(const num in map){
        if(map[num] > 1){
          duplicate = true
        }
    }
    return duplicate
}
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)
console.log(containsDuplicate([1,2,3,4]), false)



var containsDuplicate = function(nums) {
    return new Set(nums).size < nums.length;
};

var containsDuplicate = function(nums) {
    return nums.sort().some((a, i) => a === nums[i - 1]);
};

var containsDuplicate = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        
        if(obj[nums[i]] > 1) return true;
    }
    
    return false;
};