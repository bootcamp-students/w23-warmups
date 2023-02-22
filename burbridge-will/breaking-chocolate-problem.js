function breakChocolate(n,m) {
    if(n ===0 || m === 0) {
        return 0;    
    }
    return n*m - 1;
  }

  //If n OR m exacty equals 0, then return nothing
  //We are returning n multiplied by m minus 1