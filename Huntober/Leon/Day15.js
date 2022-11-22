// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

function deleteDuplicate(str){
return str.split(' ')
    .filter((e,i)=> e !== str.split(' ')[i+1])
    .join(' ')
}

deleteDuplicate("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")