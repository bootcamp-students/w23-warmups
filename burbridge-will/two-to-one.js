function longest(s1, s2) {
    console.log(s1, s2);
    let combinedString = s1.split("").concat(s2.split(""));
    combinedString = combinedString.sort();
    let longestString = [];
    for (let letter of combinedString) {
      if (letter != longestString[longestString.length - 1]) {
        longestString.push(letter);
      }
    }
    longestString = longestString.join("");
    console.log(longestString);
    return longestString;
  }
  /*
    Pseudocode
    START
    read s1, s2
    convert s1 and s2 to arrays
    join them together, call it combinedString
    sort combinedString
    init longestString as an empty array
    FOR letter of combinedString
      IF letter is not in longestString
        ADD letter to longestString
      ENDIF
    ENDFOR
    Convert longestString into a string
    RETURN longestString */