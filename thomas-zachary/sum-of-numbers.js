function getSum(a, b)
{
  //determine if both numbers are the same
  //return either if they are the same
  if (a == b){
    return a;
  }
  //if not 
  else {
    let sum = 0;
    let i = 0, j = 0;
    //find the lower number to start at 
    if (a < b){
      i = a;
      j = b;
    }
    else {
      i = b;
      j = a;
    }
    //add all the number together in sum variable
    for (; i <= j; i++){
      sum += i;
    }
    return sum;
  }
  
}