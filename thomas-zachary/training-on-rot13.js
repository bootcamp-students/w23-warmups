function rot13(message){
    let array = message.split('');
    let string = "";
    for (let char of array) {
      if ((/[a-zA-Z]/).test(char) == true){
        if (char == char.toLowerCase()) {
          let ascii = char.charCodeAt();
          ascii -= 97;
          ascii += 13;
          if (ascii > 25) {
            ascii -= 26;
          }
          string += String.fromCharCode(ascii + 97)
        }
        
        if (char == char.toUpperCase()) {
          let ascii = char.charCodeAt();
          ascii -= 65;
          ascii += 13;
          if (ascii > 25) {
            ascii -= 26;
          }
          string += String.fromCharCode(ascii + 65)
        }
      }
      else {
        string += char;
      }
    }
    return string
  }