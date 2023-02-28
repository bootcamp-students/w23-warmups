function findOdd(A) {
    let sortedA = A.sort(function(a, b){return a - b});
    console.log(A);
    while (sortedA.length > 1) {
      if (sortedA[0] === sortedA[1]) {
        sortedA = sortedA.slice(2);
      } else {
        console.log("Odd int is " + sortedA[0]);
        return sortedA[0];
      }
    }
    console.log("Odd int is " + sortedA[0]);
    return sortedA[0];
  }
  
  /*
    Pseudocode
    start findOdd
    read A
    sort A in ascending numerical order, call it sortedA
    while there is more than 1 value in sortedA
      if the value in the first position is equal to the value in the second
        remove the first two values from the array
      else
        return the value in the first position
      end if
    endwhile
    return the value in the first position (if the array was already just 1 value)
    end findOdd
  */