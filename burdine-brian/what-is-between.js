/*
  Pseudocode
  START
  READ a, b
  INIT arr as an empty array, i = a
  FOR i <= b
    PUT i into arr
    INCREMENT i
  ENDFOR
  SHOW arr
  END
*/

function between(a, b) {
    const arr = [];
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr;
  }