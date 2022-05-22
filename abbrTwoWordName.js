

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F



function abbrevName(name){
    let string= name.split(" "+"");
      let firstInitial = string[0].substring(0,1).toUpperCase();
      let lastInitial = string[1].substring(0,1).toUpperCase()
        return `${firstInitial}.${lastInitial}`;
    }
      