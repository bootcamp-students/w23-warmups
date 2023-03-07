function spinWords(string){
    return string.split(' ').map((word) => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      } else {
        return word;
      }
    }).join(' ');  
  }
  
  /*
    Pseudocode
    start spinWords
    get string
    split string into an array of words
    for every word
      if the length of the word is greater than or equal to 5
        reverse the word
      endif
    endfor
    convert array of words into a string with spaces between words
    end spinWords
  */