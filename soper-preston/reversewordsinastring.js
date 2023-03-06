function spinWords(string){
    //TODO Have fun :)
    let newStr =  string.split(" ").map(word => {
      if(word.length >= 5)
      return word.split("").reverse().join("");
      else {
        return word;
      }
    }).join(" ");
    return newStr;
    
  }
  
  //  + " " + word.split("").reverse().join("");