function isDivisible(n, x, y) {
  //divide n by x
  //divide n by y
  //compare and make sure both values are whole
  //IF (n % x NOT 0) AND (n % y NOT 0)
  //  return false
  //we have to return boolean
  if ((n % y == 0) && (n % x == 0)) {
    return true;
  }
  else {
    return false;
  }
  

}