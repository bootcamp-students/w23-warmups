/*
  Pseudocode
    function multi
      START
      READ arr
      SET product = 1
      FOR each term in arr
        SET product = product * term
      ENDFOR
      RETURN product
      END
    
    function add
      START
      READ arr
      SET sum = 0
      FOR each term in arr
        SET sum = sum + term
      ENDFOR
      RETURN sum
      END
    
    function reverse
      START
      READ str
      SET reverse = '' (an empty string)
      FOR each character in str, starting with the last and going backwards
        SET reverse = reverse + character
      ENDFOR
      RETURN reverse
      END
*/
function multi(arr) {
    let product = 1;
    console.log(arr);
    for (term of arr) {
      product *= term;
    }
    console.log("Product is " + product);
    return product;
  }
  function add(arr) {
    let sum = 0;
    console.log(arr);
    for (term of arr) {
      sum += term;
    }
    console.log("Sum is " + sum);
    return sum;
  }
  function reverse(str) {
    let backstr = '';
    console.log(str);
    for (let last = str.length - 1; last >= 0; last--) {
      backstr = backstr + str.charAt(last);
    }
    console.log(backstr);
    return backstr;
  }