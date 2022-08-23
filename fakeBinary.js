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