function absentVowel(x){
//read through string with .search method
//IF "A" NOT in x
// return index of "A"
//repeat for every vowel
let vowels = ["a", "e", "i", "o", "u"];
for (let i = 0; i < vowels.length; i++) {
  if (x.search(vowels[i]) == -1) {
    return i;
  }
}
}