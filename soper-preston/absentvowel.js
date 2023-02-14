function absentVowel(x){
    var vowels = 'aeiou';
  // loop through the vowels 
  // make them lowercase (as there may be uppercase in the string)
  // find the index of the vowels and subtract 1. 
  // this will find the zero indexed number.
  // return that number.
    for (var i in vowels) {
      if (x.toLowerCase().indexOf(vowels[i]) == -1) {
        return Number(i);
      }
    }
  }