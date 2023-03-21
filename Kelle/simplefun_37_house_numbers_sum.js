function houseNumbersSum(inputArray) {
  //find the zero, get it's index number
  //either delete everything past the zero or just add the ones before it
//   let length = inputArray.length;
//   console.log(length);
  const beyondZero = inputArray.findIndex(element => element == 0);
  console.log(beyondZero);
  inputArray.length = (beyondZero);
  console.log(inputArray);
  let sum = inputArray.reduce(function (a, b) {
    return a + b;
    }, 0);
  return sum;
  }

//   sum = 0;
//   for (i of inputArray) {
//     console.log(i);
//     sum +=i
//     if(if == 0) {
//       return sum
//       }
//     }