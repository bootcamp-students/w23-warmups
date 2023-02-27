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