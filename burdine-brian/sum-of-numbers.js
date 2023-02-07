/*
  Pseudocode
  START
  READ a, b
  INIT sum = 0
  IF a = b        turns out this is unnecessary 
    sum = a
  ELSE
    IF a > b
      SET sum = b
      SET b = a
      SET a = sum
      SET sum = 0
    ENDIF
    FOR each number starting from a and going to b
      SET sum = sum + number
    ENDFOR
  ENDIF
  SHOW sum
*/

function getSum(a, b)
{ 
  let sum = 0;
  if (a > b) {
    sum = b; 
    b = a; 
    a = sum; 
    sum = 0;
  }
  for (let num = a; num <= b; num++) {
    sum += num;
    console.log("a is " + num + ", b is " + b + ", sum is " + sum);
  }
  console.log("Test end");
  return sum;
}