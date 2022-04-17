
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


//Answer

function removeExclamationMarks(s) {
    let regex= /!/ig
    return s.replace(regex, '');
  }