function pigIt(str){
    //Code here
    console.log(str);
    let words = str.split(" ");
    console.log(words);
    let pigLatin = words.map(word => {
      if (!word.match(/[.!?,':;']/)) {
        return word.slice(1) + word[0] + 'ay';
      } else {
        return word;
      }
    }).join(' ');
    console.log(pigLatin);
    return pigLatin;
  }
  
  /*
    Pseudocode
    start pigIt
    get str
    split str into an array of words
    for every word in words
      if word is a word (no punctation)
        create a new word with every letter but the first, add the first, and then add 'ay'
      end if
    endfor
    join words back into a string, call it pigLatin
    return pigLatin
    end pigIt
  */