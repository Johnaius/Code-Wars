
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x){
  let str = ''
  console.log(x)
  for(let i = 0; i < x.length ; i++){
    if (x[i] < 5){
      str += 0
      
    }else if(x[i] >= 5) {
      str += 1  
    
      }
        }
          return str
  }

function fakeBin(x){
    let str = ''
    console.log(x)
    for(let i = 0; i < x.length ; i++){
      if (x[i] < 5){
        str += 0
        
      }else if(x[i] >= 5) {
        str += 1  
      
        }
          }
            return str
    }