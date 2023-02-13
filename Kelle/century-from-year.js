//return century when given year
function century(year) {
  if (year <= 100) {
    return 1;
  }
  else if (year % 100 == 0) {
    return(year / 100);
  }
  else {
    return(parseInt(year / 100) + 1);
  }
};

//function century(year) {
//  return Math.ceil(year/100);
//}
