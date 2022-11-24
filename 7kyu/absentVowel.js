function absentVowel(str){
    let vowelArr = ['a', 'e', 'i', 'o', 'u']
   for(let i = 0; i < vowelArr.length; i++)
        if(str.indexOf(vowelArr[i]) === -1){
            return `${i}, missing ${vowelArr[i]}`
        }
    }