Johnaius
var isSquare = function(n){
  let sqrt = Math.sqrt(n)
  if(n % sqrt === 0 ){
    return true
  }else if( n <= -1){
    return false
  }else if (n===0){
    return true
    }else{
    return false
  }
}