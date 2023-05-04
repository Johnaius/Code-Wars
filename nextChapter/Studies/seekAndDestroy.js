// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// // Note: You have to use the arguments object.



function destroyer(arr, ...val) {
    return arr.filter((x) => !val.includes(x))
  }
  
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3); //In this example, the initial array is [1, 2, 3, 1, 2, 3] and the elements to be removed are 2 and 3. The resulting array is [1, 1].

//   The ...val syntax allows you to pass multiple arguments as an array to the function.
// The filter() method creates a new array that contains all elements from the initial array that pass the test specified in the callback function. In this case, the test is whether the current element is not included in the val array.
// The includes() method is used to check if the current element is included in the val array. If it is, the callback function returns false and the element is removed from the resulting array.