function order(words){
    console.log(words)
    let sortedWords = words.split(" ");
    for (let i = 0; i < sortedWords.length; i++) {
      let orderNum = i + 1;
      for (let j = 0; j < sortedWords.length; j++) {
        if (sortedWords[j].search(orderNum) != -1) {
          let temp = sortedWords[i];
          sortedWords[i] = sortedWords[j];
          sortedWords[j] = temp;
        }
      }
    }
    sortedWords = sortedWords.join(" ");
    console.log(sortedWords);
    return sortedWords;
  }
  
  /*
    Pseudocode
    start order
    read words
    split words into an array of words, call it...sortedWords
    for every word in sortedWords
      set orderNum equal to index of word + 1
      for every word in sortedWords (again)
        if word contains orderNum
          swap word with word in position orderNum - 1 (index of outer loop)
        endif
      endfor
    endfor
    convert sortedWords into a string
    return sortedWords
    end order
  */