function absentVowel(x){
  var vowels = "aeiou";
  for (var i in vowels){
    if (x.toLowerCase().indexOf(vowels[i]) == -1){
      return Number(i); 
      }
  }
  }

//   let absentVowel = ("a", "e", "i", "o", "u");
//   if (x === 'a') {
//     return(0);
//   }
//   else (x === 'e') {
//     return (1);
//   }
//    else if (x === 'i') {
//     return (2);
//   }
//    else if (x === 'o') {
//     return (3);
//   }
//    else if(x === 'u') {
//     return (4);
//   };
// }

// we need an if statement for each vowel
// if statement checks x for each vowel 
// comes back boolean result