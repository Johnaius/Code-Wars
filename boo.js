

function iterate(arr){
    let start=0
    arr.forEach(n=> start += n)
    return start
}

iterate([1,2,4,10])


function reducer(arr){
return arr.reduce((a, b)=> a+b,0)
}

reducer([1,2,4,10])
