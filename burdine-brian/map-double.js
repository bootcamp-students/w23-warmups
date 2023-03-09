function double(array) {
    // Use array.map() to return a new array with each value twice
    // as large as the corresponding value in the passed in array.
//   console.log(array);
//   console.log(array.map(value => value * 2));
  return array.map(value => value * 2);
}

/*
  Pseudocode
  start double
  get array
  for each value in array (using map)
    double the value
  endfor
  return array
  end double
*/