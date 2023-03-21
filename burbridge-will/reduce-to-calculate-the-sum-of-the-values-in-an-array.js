function sum(array) {
    // Use array.reduce() to calculate and return the
    // sum of the values in array.
    const initValue = 0;
  const sum = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initValue
  );
    return sum;
  }