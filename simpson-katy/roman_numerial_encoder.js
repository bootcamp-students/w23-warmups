function solution(number){
    // convert the number to a roman numeral
    let numObj = {
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
      I: 1,
    }
      let newStr = "";
    for (let num in numObj) {
      let m = Math.floor(number / numObj[num]);
      if (m !== 0) {
        newStr += num.repeat(m);
      } 
      number %= numObj[num];
      if (number === 0) {
        return newStr;
      }
    }
    return newStr;
  }
  
  console.log(solution(1));
  console.log(solution(2008));