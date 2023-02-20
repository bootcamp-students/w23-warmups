function findShort(s){
  console.log(s);
  let newArray = s.split(" ");
  console.log(newArray);
  
  let shortestWord = newArray[0];
  for (i = 0; i < newArray.length; i++) {
    
    if (newArray[i].length < shortestWord.length) {
      shortestWord = newArray[i];
      console.log(shortestWord);
    }
  }
  return shortestWord.length;
}

//From a string of words, return the length of the shortest word(s)

//split string into array where each word is a string index in array
//find shortest word
  
//while iterating over array, 
  //if current index string length is less than previous string length
    //if (length of current string < length of next string)
        //store that in shortestWord
