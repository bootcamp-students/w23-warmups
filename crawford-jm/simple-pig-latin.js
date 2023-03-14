function pigIt(str){
  //Code here
  let splitStr = str.split(' ')
  let output = []
  for(word of splitStr){
    if (word !== '!' && word !== '?'){
      word = word.split('')
      let letter = word[0]
      let wordSlice = word.slice(1)
      output.push(wordSlice.join("") + letter + "ay")
      } else {
        output.push(word);
      }
  }
  output = output.join(' ')
  return output
}

//Function takes a string of words
//Move first letter of each word to the end of word
//Add "ay" to the end of the word
