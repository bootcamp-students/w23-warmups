function findOdd(A) {
  //Declare variable count, set to 0
  var count = 0;
  //For loop to iterate over A
  for(var i = 0; i < A.length; i++){
    //Nested for loop to iterate over A
    for(var j = 0; j < A.length; j++){
      
      if(A[i] == A[j]){
        count++;
      }
    }
    //If count is odd
    if(count % 2 != 0 ){
      return A[i];
    }
  }
};

//For loop to iterate over the given array
//Determine the number of times each integer appears (forEach)
//
//num % 2 === 1 (if num is odd...)

//Functions takes an array of integers
//Find the integer that appears an odd number of times
//Only 1 integer will appear an odd number of times
