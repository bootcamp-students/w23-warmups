/*
  Pseudocode
  START
  READ min, max, step
  INIT range as an empty array
  WHILE min <= max
    SET next index in range = min
    SET min = min + step
  ENDWHILE
  SHOW range
*/

function generateRange(min, max, step){
    const range = [];
    console.log("Min is " + min + ", Max is " + max + ", Step is " + step);
    while (min <= max) {
      range.push(min);
      min += step;
    }
    console.log(range);
    return range;
  }