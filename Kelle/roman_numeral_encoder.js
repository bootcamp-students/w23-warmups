function solution(number){
  // convert the number to a roman numeral
  // create object with the roman numeral 'rules'
  // create new string to hold roman numberal version of the number
  // loop through the number and apply rules until complete
  
  const roman = {
    M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
    L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
  };
  
  let str = "";
  for (var i of Object.keys(roman)) {
    var q = Math.floor(number / roman[i]);
    number -= q * roman[i];
    str += i.repeat(q);
  }
  return str;
};