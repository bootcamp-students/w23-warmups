function pigIt(str){
    //Code here
    let strArr = str.split(" ");
    let newArr = [];
    strArr.map((word) => {
      if (!word.match(/[.!?,':;']/)) {
        let newWord = word.slice(1)
        newArr.push(newWord + word[0] + 'ay')
      } else {
        newArr.push(word);
      }
    })
     
    return newArr.join(" ")   
  }
  
  console.log(pigIt('Hello world !'))
  
  /*
  
  turn str into an array
  loop through that array
  loop through each word
  let the first letter = the first index
  remove the first letter save it as something else
  return the letters, first letter, then the string "ay"
  
  */