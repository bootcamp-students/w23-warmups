function houseNumbersSum(inputArray) {
  //console.log(houseNumbersSum);
  console.log(inputArray);
  //Loop through array
  for (let sum = 0, i = 0; ; i++) {
    //If current index in array is equal to 0...
    if (inputArray [i] === 0) {
      //Return all values iterated through
      return sum
      //find sum of each index through each iteration
    } else sum += inputArray[i]
  }
}

//Given the sequence of houses(inputArray)...
//Determine sum of house numbers
//Once 0 is encountered, stop counting
//Output sum of array, stopping at 0
