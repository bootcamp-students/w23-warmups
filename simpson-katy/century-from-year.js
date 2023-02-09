function century(year) {
//if year is less than 100 it is the first century
    if (year <= 100) {
      return 1;
//if the year is divisible evenly by 100 the century is the remainder of the year/100 (ex. 2000/100 = 20th century)
    } else if (year % 100 == 0) {
      return year/100;
//if the year is not evenly divisible by 100 the century is the remainder of the year plus 1 (ex. 2012/100 = 20+1 = 21st century)
    } else {
      return (parseInt(year/100) + 1); //parseInt takes the first part of the year/100 (1705/100 = 17.05 parseInt removes the .05)
    }
  };

 