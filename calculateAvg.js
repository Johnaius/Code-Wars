// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.



// function find_average(array) {
//     let arrLen = array.length-1
//     let arrSum = array.reduce((a,b) => a+b, 0)
//     console.log(arrLen)
//     console.log(arrSum)
//     return arrSum / arrLen
    
//    }  !!FIRST TRY WAS WRONG!!


   function find_average(array) {
    if(array.length === 0){
      return 0  // if empty array return 0
    }else{
    
      let arrLen = array.length
      let arrSum = array.reduce((a,b) => a+b, 0) // reduce sums the array elements
      
      return arrSum / arrLen
      }
     }