century-from-year
/*
  Pseudocode
  START
  READ year
  CALCULATE and SHOW year/100, rounded up
  END
  
*/
function century(year) {
  // Finish this :)
  console.log(year + " --> " + Math.ceil(year / 100));
  return Math.ceil(year / 100);
}