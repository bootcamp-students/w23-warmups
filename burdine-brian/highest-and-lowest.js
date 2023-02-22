function highAndLow(numbers){
    console.log(numbers);
    let nums = numbers.split(" ");
    console.log(Math.max(...nums) + " " + Math.min(...nums));
    return Math.max(...nums) + " " + Math.min(...nums);
  }
  
  /*
      Pseudocode
      START highAndLow
      READ numbers
      SPLIT numbers into an array (of numbers), call it nums
      FIND and RETURN the lowest and highest number
      END highAndLow
  */