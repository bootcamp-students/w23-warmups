function houseNumbersSum(inputArray) {
    console.log(inputArray);
    let sum = 0;
    let i = 0;
    while (inputArray[i] != 0) {
      sum += inputArray[i];
      i++;
    }
    console.log(sum);
    return sum;
    
  }
  
  /*
    Pseudocode
    start houseNumbersSum
    set sum = 0;
    while the house number isn't zero
      add the house number to the sum
    endwhile  
    return sum
    end houseNumbersSum
  */