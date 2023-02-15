var makeEveryLetterAfterXCaps = function (str, letter) {
    // search string for letter
    // get index of letter 
    // index plus 1 gets uppercased
    // keep searching for letter after uppercased letter
    // repeat for length of string
    let pos = 0;
    let update = str;
    while (pos < update.length) {
    pos = update.indexOf(letter, pos) + 1;
      if (pos == 0){
        break;
      }
    update = update.slice(0, pos) + update.charAt(pos).toUpperCase() + update.slice(pos + 1);
     } 
    return update;
    }git 