//2 arrays are given
//combine the two arrays into one array
//sum all the numbers in the array together by looping through and adding arr[i] to a running sum of nums (sumOfNums)
//return a single num sum of the arrays

function arrayPlusArray(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    let sumOfNums = 0;
    for (let i = 0; i < arr1.length; i++) {
        sumOfNums += arr1[i];
    }
    return sumOfNums;
  }

  //console test
  console.log(arrayPlusArray([1,2,3], [4,5,6])); //should equal 21