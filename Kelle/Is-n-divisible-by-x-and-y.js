//Is n divisible by x and y?
function isDivisible(n, x, y) {
//Determine IF n / x has any remainders 
//AND if n / y has any remainders
  if (n % x === 0 && n % y === 0) {
//IF they don't return true
    return true;
  } 
//IF they do return false
  else {
    return false;
  }
}


