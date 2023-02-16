function breakChocolate(n,m) {
    // multiply m * n for total area of chocolate
    //subtract 1 from total areatotal area doesnt go over 1 then return 0 for no breaks
    //if the 
    let x = n * m;
    if (x < 2) {
      return 0
    }
    return n * m - 1;
  }