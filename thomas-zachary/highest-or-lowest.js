function highAndLow(numbers){
  // convert string into array
  // sort array numerically
  // pick the first and last index of array for smallest and larget number
  // return last index first, and first index last in a string
  let arr = numbers.split(" ");
  console.log(arr);
  arr.sort( (a, b) => {
    {return a - b};
  })
  console.log(arr);
  return arr[arr.length - 1] + " " + arr[0];
}