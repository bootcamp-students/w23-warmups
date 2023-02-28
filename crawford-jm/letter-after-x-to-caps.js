var makeEveryLetterAfterXCaps = function (str, letter) {
    //Declares variable position and sets it to 0 
      let position = 0;
      console.log(str);
      console.log(letter);
      //While position is less than length of str...
      while (position < str.length) {
        //Position is first instance of letter and position in str plus 1
        position = str.indexOf(letter, position) + 1;
        //If position is equal to 0...
        if (position == 0) {
          break;
        }
          //Declares varibale capital
          //Converts letter following instance of given letter to capital letter
          let capital = str.charAt(position).toUpperCase();
          str = str.substring(0, position) + capital + str.substring(position + 1);
          console.log(str);
      }
      return str;
    }


//Function takes a string and a single letter
//Find every instance of letter in string
//Capitalize every letter in string after letter passed as function argument
