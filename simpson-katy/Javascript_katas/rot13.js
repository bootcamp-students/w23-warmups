function rot13(message){
    let result = "";
    for (let i = 0; i < message.length; i++) {
      let code = message.charCodeAt(i);
      if (code >= 65 && code <= 90) { // uppercase letters
        code = ((code - 65 + 13) % 26) + 65;
      } else if (code >= 97 && code <= 122) { // lowercase letters
        code = ((code - 97 + 13) % 26) + 97;
      }
      result += String.fromCharCode(code);
    }
    return result;
  }
  
  // console.log((65 - 65 + 13) % 26)
  
  /*
  Empty string to hold result
  loop through the message
  find the character code at the current index
  if the character code is between 65 and 90 (capital letters of the alphabet)
  then get a zero based index of the letter add 13 and perform ROT13 subsitiutions
  (take the result modulo 26 to wrap around the alphabet if necessary)
  else if charcode is between 97 and 122
  then get a zero based index of the letter add 13 and perform ROT13 subsitiutions
  (take the result modulo 26 to wrap around the alphabet if necessary)
  return something
  */