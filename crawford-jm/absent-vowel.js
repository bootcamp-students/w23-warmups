function absentVowel(x){
//Declaring variable named vowel constaining string 'aeiou'
const vowels = 'aeiou';
  //For loop that loops through variable vowels
  for (let i in vowels) {
    //if statement returns any capitalized letter to lower case
    //indexOf looping through vowel string and converting to array
    if (x.toLowerCase().indexOf(vowels[i]) == -1) {
      return Number(i);
    }
  }
}
