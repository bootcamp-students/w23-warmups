function isDivisible(n, x, y) {
    /*
      Pseudocode
        START
        READ n, x, y
        IF (n is divisble by x AND n is divisible by y)
          SHOW true
        ELSE
          SHOW false
        ENDIF
        END
    */
    
    console.log("n: " + n + ", x: " + x + ", y: " + y);
    console.log(( ((n % x) === 0) && ((n % y) === 0) ));
    return ( ((n % x) === 0) && ((n % y) === 0) );
  }