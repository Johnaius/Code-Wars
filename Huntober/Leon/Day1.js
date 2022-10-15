// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//just one whole number

//print each number if not divisible by 3 or 5.  if by 3 print "Fizz", if by 5 print "Buzz, if by 3 and 5 print "Fizz Buzz"

// (5)(, 1,2,"Fizz",4,"Buzz")
// (15)(1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"Fizz Buzz")

function getFizzBuzz(num) {}

console.log(getFizzBuzz(5), (1, 2, "Fizz", 4, "Buzz"));
console.log(
  getFizzBuzz(15),
  (1,
  2,
  "Fizz",
  4,
  "Buzz",
  "Fizz",
  7,
  8,
  "Fizz",
  "Buzz",
  11,
  "Fizz",
  13,
  14,
  "Fizz Buzz")
);
