// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



function count (string) {  
    let objCounter = {};
    string.split('').map(ele => objCounter[ele] = objCounter[ele] + 1 || 1)
    return objCounter
  }

  console.log(count('aba'), {'a': 2, 'b': 1})



  function count (string) {  
    answerObj= {};
    string.split('').forEach(e => answerObj[e] = (answerObj[e] || 0) + 1);
    return answerObj;
 }


 function countChars(str){
    //create obj
    let countObj = {}
    
    for(const c of str){
        if (countObj[c]){
            countObj[c]++
        }else{
            countObj[c=1]
        }
    }
    return countObj
 }