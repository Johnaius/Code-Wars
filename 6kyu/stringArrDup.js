function dup(arr){
    return arr.map(e=>e.split('')
    .filter((letter,ind,arr) => letter !== (arr[ind+1]))
    .join(''))
}
