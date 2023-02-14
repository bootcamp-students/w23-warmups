function absentVowel(x){
    //Declaring a variable that has all the vowels in it
      const vowels = 'aeiou';
      //loop through the variable "vowels"
      //finding the index of "vowels" and subtract 1.
      //This will find the zero indexed number
      for (let i in vowels) {
        if (x.toLowerCase().indexOf(vowels[i]) == -1) {
          return Number(i);
        }
      }
    }
    