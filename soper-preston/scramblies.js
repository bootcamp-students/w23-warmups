function scramble(str1, str2) {
    const letters = {};
    
    for (let i = 0; i < str1.length; i++) { 
      const currentLetter = str1[i];
      letters[currentLetter] = letters[currentLetter] || 0;
      letters[currentLetter]++;
    } 
    
    for (let i = 0; i < str2.length; i++) {
      const currentLetter = str2[i];
      if (letters[currentLetter] > 0) {    
        letters[currentLetter]--;
      } else {  
        return false;
      }
    }
    return true;
  }