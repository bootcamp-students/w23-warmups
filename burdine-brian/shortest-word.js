function findShort(s){
    console.log(s);
    let words = s.split(" ");
    let shortestLength = words[0].length;
    for (let word of words) {
      if (word.length < shortestLength) {
        shortestLength = word.length;
      }
    }
    console.log(shortestLength);
    return shortestLength;
  }
  
  /*
    Pseudocode
    START findShort
    READ string s
    SPLIT s into an array of words
    SET shortestLength = the length of the first word
    FOR every word in words
      IF the length of current word is less than the shortestLength
        SET shortestLength = length of current word
      ENDIF
    ENDFOR
    RETURN shortestLength
  */