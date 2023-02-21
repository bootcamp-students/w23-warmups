function breakChocolate(n,m) {
  if (n > 0 && m > 0)
    return ((n - 1 ) + ((m - 1) * n));
  else
    return (0); 
}