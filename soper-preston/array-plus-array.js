//Declare the arrays
//arr1
//arr2

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

//Function to add arrays together using arrayPlusArray

function arrayPlusArray(arr1, arr2) {
  //Using concat to add arr1 to arr2 to make it in to one array
  let newArr = arr1.concat(arr2);
  //Create a value and use reduce property to add the numbers together
  let val = newArr.reduce(function(accumulator, currentValue){
  //Then return that value to add it to the val variable
    return accumulator + currentValue;
  });
  //Return the final number
  return val;
}