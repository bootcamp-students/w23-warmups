function findShort(s){
    let words = s.split(' ');
    let shortwrd = words[0].length;
    for (let word of words) {
      if (word.length < shortwrd) {
        shortwrd = word.length;
      }
    }
    return shortwrd;
  } 
  
  //Declared a variable "words" to split strings into an array
  //declared a variable "shortwrd" to find the shortest length of strings in words
  //Declaring a cavriable "word" to loop through "words" to find the shortest string
  //returning the shortest word "shortwrd"
  