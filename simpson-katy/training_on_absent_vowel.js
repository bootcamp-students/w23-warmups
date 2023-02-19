function absentVowel(x) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < vowels.length; i++) {
    if (x.search(vowels[i]) == -1) {
      return i;
    }
  }
}


  console.log(absentVowel("John Doe hs seven red pples under his bsket"));
  console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"));

  /*Pseudocode:
  Firgure out the missing vowel from each string. 
  Init:
  array of vowels


  1. set up array containing vowels
  2. loop through the array of vowels 
  3. if the sentence(that is defined by x) does not contain the vowel return the i index missing. 

  if (search through sentence for the vowel if it does not contain it == -1) then return i

  
  Major HINT: Notes: There is no need for string
  validation and every sentence given will contain all vowels but one.
  Also, you won't need to worry about capitals.
  */