function solution(number){
  //declare an object containing key value pairs
  let romNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  //declare str to hold empty string
  let str = '';
  //loop over romNum..
  for (let i of Object.keys(romNum)) {
    //declare q to hold value and key rounded down
    let q = Math.floor(number / romNum[i]);
    //roman number value as index
    number -= q * romNum[i];
    //concatenates key letters into string that is equal to key value
    str += i.repeat(q);
  }
  return str;
}

//function take integer between 1 and 3999
//return a string containing roman numeral of that number
