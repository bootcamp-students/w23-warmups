function solution(number){
    // convert the number to a roman numeral
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
    let str = '';
    for (let i of Object.keys(romNum)) {
      let q = Math.floor(number / romNum[i]);
      number -= q * romNum[i];
      str += i.repeat(q);
    }
      console.log(str);
  
    return str;
  }