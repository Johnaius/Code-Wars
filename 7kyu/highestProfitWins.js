function minMax(arr){
    arr.sort((a,b) => a-b)
    return Array(arr[0], arr[arr.length-1])

    //  let maxMinArr = [arr.push(Math.max(arr), Math.min(arr))]
//  return maxMinArr
}