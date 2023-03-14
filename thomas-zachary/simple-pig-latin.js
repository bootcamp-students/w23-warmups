function pigIt(str){
    //split string into array
    //split each word into array
    //take first letter into a temp variable 
    //pop first letter
    //push first letter onto the back
    //add 'ay' to the end of it
    //repeat for each word
    words = str.split(" ")
    let finish = words.map((word) => {
      if (word === "!" || word === "?"){
        return word
      }
      let letters = word.split("")
      let temp = letters.shift()
      letters.push(temp)
      letters.push("ay")
      return letters.join("")
    }).join(" ")
    return finish
  }