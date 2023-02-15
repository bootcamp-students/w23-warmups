var makeEveryLetterAfterXCaps = function (str, letter) {
    // enter solution here
      let position = 0;
      console.log(str);
      console.log(letter);
      while (position < str.length) {
        position = str.indexOf(letter, position) + 1;
        if (position == 0) {
          break;
        }
        let capital = str.charAt(position).toUpperCase();
        str = str.substring(0, position) + capital + str.substring(position + 1);
        console.log(str);
      }
    
      return str;
    }
    
    /*
      START makeEveryLetterAfterXCaps
      READ str, letter
      INIT position = 0
      WHILE position < the length of str
        Search for the position  of 'letter' in str, starting from position
        IF letter is not found in the string
          Exit the loop
        Increase position by 1
        Capitalize the letter of str in that position
        SET str equal to the part of str before that letter, the newly capitalized letter, and the rest
          of str
      ENDWHILE
      RETURN str
      END makeEveryLetterAfterXCaps
        
    */