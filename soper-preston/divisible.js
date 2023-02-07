function isDivisible(n, x, y) {
    if (n % x == 0 && n % y == 0) // Tests if there is a remainder of x and y from n
      return true
    else {
      return false
    }
  }