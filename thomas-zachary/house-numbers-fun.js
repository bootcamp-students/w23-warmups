function houseNumbersSum(inputArray) {
    //loop through array adding to sum 
    //when you encounter a zero stop (quit,break,return)
    let sum = 0;
    for (house of inputArray) {
      if (house == 0) {
        return sum 
      }
      sum += house;
    }
   
  }