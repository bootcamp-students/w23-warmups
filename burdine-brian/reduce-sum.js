function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    console.log(array);
    console.log(array.reduce((a, b) => a + b, 0));
    return array.reduce((a, b) => a + b, 0);
  }
  
  /*
    Pseudocode
    start sum
    get array
    init sum as 0
    for every value in array (using reduce)
      add value to sum
    endfor
    return sum
    end sum
  */