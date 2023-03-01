function houseNumbersSum(inputArray) {
    //coding and coding..
    // Loop through the array, when it gets to an index that has a 0, stop and add all numbers up to that point
    // Return the sum
    let sum = 0;
    // Brian super helped, although we went about it slightly different, helped get my solution working with the < inputArray.length && inputArray[i] != 0
    // Why is Brian so good at this??
    for (let i = 0; i < inputArray.length && inputArray[i] != 0; i++) {
      sum += inputArray[i]
      console.log(inputArray.length)
      console.log(inputArray[i])
    }
    return sum;
    
  };