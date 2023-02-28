function breakChocolate(n,m) {
    //If n is strictly equal to 0 OR m is strictly equal to 0...
    if(n ===0 || m === 0) {
        return 0;    
    }
    //Return dimensions minus 1
    return n*m - 1;
  }

//Split chocolate bar of given dimension n X m into small squares
//Each square is 1x1 and unbreakable
//Function should return minimum number of breaks needed
//If input data is invalid, return 0 (no chocolate to split)
