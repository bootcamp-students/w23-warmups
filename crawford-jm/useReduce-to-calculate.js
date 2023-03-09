function sum(array) {
  const initial = 0;
  const initialSum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initial
  );
  console.log(initialSum);
  return initialSum;
  // Use array.reduce() to calculate and return the
  // sum of the values in array.
}
