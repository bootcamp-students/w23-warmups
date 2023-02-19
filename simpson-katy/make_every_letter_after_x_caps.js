//What we're trying to achieve - turn the letter after "x" into a capital letter
//function - takes in a str and letter
var makeEveryLetterAfterXCaps = function (str, letter) {
  //start at 0
  let i = 0;
  //while the index of the string is less than the length let the search the string for the letter
  //if the letter is not found return the str
  //if the letter is found return the character after the string as a capital 
  while (i < str.length) {
    i = str.indexOf(letter, i) + 1;
    if (i == 0) {
      break;
    }
    let capital = str.charAt(i).toUpperCase();
    str = str.substring(0, i) + capital + str.substring(i + 1);
  }
  return str;
}













// //What we're trying to achieve - turn the letter after "x" into a capital letter
// //function - takes in a str and letter
// var makeEveryLetterAfterXCaps = function (str, letter) {
//   //convert str into an array
//     let strArr = str.split("");
//     let newArr = [];
//   //loop through the array
//     for (let i = 0; i < strArr.length - 1; i++) { //if the current index of the array = letter
//       newArr.push(strArr[i]);
//         if (strArr[i] == letter) { //next letter str[i].toUpperCase()
//            newArr.push(strArr[i + 1].toUpperCase());
//           i++;
//       }
//     }
    
//     //kept getting extra letters on end so this gets rid of them
//     if(newArr.length != strArr.length)
//       newArr.push(strArr[strArr.length -1]);
//     return newArr.join("");
  
//   }
  
//   console.log(makeEveryLetterAfterXCaps('bac', 'a'));
//   console.log(makeEveryLetterAfterXCaps('and the cow jumped over the moon', 'n'));
//   console.log(makeEveryLetterAfterXCaps('where are they now', ' '));
//   console.log(makeEveryLetterAfterXCaps('aaaa', 'a'));
  
  //What we're trying to achieve - turn the letter after "x" into a capital letter
  //function - takes in a str and letter
  //convert str into an array 
  //loop through the array
  //if the current index of the array = letter
  //next letter str[i].toUpperCase()
  




// var makeEveryLetterAfterXCaps = function (str, letter) {
//     let strArr = str.split("");
//     let newArr = [];

//     // for (let i = 0; i < strArr.length; i++) {
//     //     if 
//     // }
// }


// //What we're trying to achieve - turn the letter after "x" into a capital letter
// //function - takes in a str and letter
// var makeEveryLetterAfterXCaps = function (str, letter) {
//     //convert str into an array
//       let strArr = str.split("");
//       let newArr = [];
//     //loop through the array
//       for (let i = 0; i < strArr.length; i++) { //if the current index of the array = letter
//           if (strArr[i - 1] == letter) { //next letter str[i].toUpperCase()
//              newArr.push(strArr[i].toUpperCase());
//         } else {
//           newArr.push(strArr[i]);
//         }
//       }
      
//       return newArr.join("");
//       //return str;
    
//     }
    
//     console.log(makeEveryLetterAfterXCaps('bac', 'a'));
//     console.log(makeEveryLetterAfterXCaps('and the cow jumped over the moon', 'n'));
//     console.log(makeEveryLetterAfterXCaps('where are they now', ' '));
//     console.log(makeEveryLetterAfterXCaps('aaaa', 'a'));
    
//     //What we're trying to achieve - turn the letter after "x" into a capital letter
//     //function - takes in a str and letter
//     //convert str into an array 
//     //loop through the array
//     //if the current index of the array = letter
//     //next letter str[i].toUpperCase()
    
    