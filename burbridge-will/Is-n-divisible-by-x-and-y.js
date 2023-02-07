function isDivisible(n, x, y) {
    //Is n divisible by x AND/OR y
      return !(n % x || n % y);
    //It returns n is not divisible by x OR y
  }