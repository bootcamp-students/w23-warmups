function double(array) {
  // Use array.map() to return a new array with each value twice
  // as large as the corresponding value in the passed in array.
const newArray = array.map(a => a * 2);
return newArray;
}