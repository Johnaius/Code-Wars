// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


    function whatday(num) { 
        //enter a number 1-7 no funny bz
        //return corresponding say of week 1 ==="Sunday" 7 ==="Saturday"
        // whatday(2), "Monday"
        // whatday(7), "Saturday"
        // whatday(88), "Wrong, please enter a number between 1 and 7"
          if(num === 1){
            return "Sunday"
          }else if(num == 2){
            return "Monday"
          }else if(num == 3){
            return "Tuesday"
          }else if(num == 4){
            return "Wednesday"
          }else if(num == 5){
            return "Thursday"
          }else if(num == 6){
            return "Friday"
          }else if(num == 7){
            return "Saturday"
          }else{
            return "Wrong, please enter a number between 1 and 7"
            }
              }