/*
  Pseudocode
  START
  READ str x
  INIT array of vowels
  FOR each vowel 
    IF vowel is not in x
      RETURN position of vowel
    ENDIF
  ENDFOR
  END
*/

function absentVowel(x){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    console.log(x);
    for (let index = 0; index < vowels.length; index++) {
      if (x.search(vowels[index]) === -1) {
        console.log(vowels[index] + " is missing");
        return index;
      }
    }
  }