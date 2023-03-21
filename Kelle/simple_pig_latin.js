function pigIt(str){
  //split the string and match only letters a-z then
  //shift first letter of each word off and push to end of word
  //push ay to the end of each word
  //return each new word in same word order and with any punctuation
  const newArr = str.split(" ");
    console.log(newArr);
  return newArr.map((word) => {
    return word.match(/[a-z]/i) ?
      `${word.substr(1)}${word.substr(0,1)}ay` : word
    }).join(" ");  
}