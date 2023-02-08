function arrayPlusArray(arr1, arr2) {
    //Declare sum1 with value of 0
    let sum1 = 0;
    //For each number in array 1...
    for (nums of arr1) {
       //Add numbers starting with index 0
      sum1 += nums;
    }
    //Declare sum2 with value of 0
    let sum2 = 0;
    //For numbers in array 2
    for (nums2 of arr2) {
       //Add numbers starting with index 0
      sum2 += nums2;
    }
    //Declare total of sum1 and sum2
    let total = sum1 + sum2;
    return total
  }