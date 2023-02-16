function breakChocolate(n,m) {
    //   console.log(n, m);
    //   console.log("Chocolate is " + m + "x" + n);
    //   console.log("If both are non-zero, breaks required is " + (m * n - 1));
      return (n > 0 && m > 0 ? n * m - 1 : 0);
    }
    
    /*
      Pseudocode
      START breakChocolate
      READ dimensions n, m
      IF both n and m are greater than 0
        RETURN n * m -1
      ELSE
        RETURN 0
      ENDIF
      END breakChocolate
      
    */