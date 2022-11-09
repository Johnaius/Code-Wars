




function createPhoneNumber(numbers){
    let template = '(xxx) xxx-xxxx'
    numbers.forEach(i => {
    template = template.replace('x', i)
    })
      return template
     }