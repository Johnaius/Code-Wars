//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

function diffArray(arr1, arr2) {
    return arr1
    .concat(arr2)
    .filter((x) => !arr1.includes(x)|| !arr2.includes(x))
   
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
//   The diffArray function compares two lists of numbers, let's call them "List 1" and "List 2". It finds the numbers that are in one list but not in the other list.

// Here's how it does that:

// First, it puts all the numbers from both lists into one big list.

// Next, it checks each number in the big list. If the number is not in List 1 OR it's not in List 2, then it adds that number to a new list of numbers.

// Finally, it gives you the new list of numbers it found.

// So, in your example, List 1 is [1, 2, 3, 5] and List 2 is [1, 2, 3, 4, 5]. The function combines both lists into a new big list, which is [1, 2, 3, 5, 1, 2, 3, 4, 5]. Then it checks each number in that big list, and finds that 4 is not in List 1, so it adds it to a new list of numbers. That new list only has 4 in it, so the function returns [4].