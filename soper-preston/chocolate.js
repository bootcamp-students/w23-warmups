// Works for the first (5,5) but not for (1,1)

function breakChocolate(n,m) {
    if (n * m > n * m - 1) {
      return n * m - 1;
    }
    else {
      return 0;
    };
  
  };