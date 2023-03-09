function solution(number){
  // convert the number to a roman numeral
  //treat this like dividing cents??
  //if number >= 1000
  //use remainder operator??
  //  subtract 1000 add M to output string
  //none of above worked how i wanted
  
  // declare an object consisting of keys being the roman numerals, and values are their values
  // use a for in loop, lets you loop through attributes of an object, the iterator is the key value
  // while number bigger than value of current object attribute, add the corresponding key to an 
  //    empty string
  // subtract the current value,the loop is on after adding to the string then continue 
  //return the string after the for loop
  let numerals = {M: 1000, 
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
                   I: 1  }
 let string = "";
  
  for (let key in numerals) {
    while(number >= numerals[key]) {
      string += key;
      number -= numerals[key]
      
    }
  }
  return string;
}