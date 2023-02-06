/*
  Psuedocode
    START
    READ arrays of integers arr1 and arr2
    INIT sum as 0
    FOR every item in arr1
      CALCULATE sum = sum + item of arr1
    FOR every item in arr2
      CALCULATE sum = sum + item of arr2
    SHOW sum
*/

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    //add numbers in arr1
    for (num of arr1) {
      sum += num;
    }
    //add numbers in arr2
    for (num of arr2) {
      sum += num;
    }
    console.log(sum);
    return sum; //return total
  }