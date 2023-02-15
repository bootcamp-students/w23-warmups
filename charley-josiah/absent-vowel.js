function absentVowel(x){
    let vowels = 'aeiou';
    for (let i in vowels){
      if (x.toLowerCase().indexOf(vowels[i]) == -1){
        console.log(i)
        return Number(i);
        }
    }
  }