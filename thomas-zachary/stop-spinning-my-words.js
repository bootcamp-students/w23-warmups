function spinWords(string){
    // split string
    // loop over array 
    // IF word length greater than 4
    //  reverse word order
    // join array to gether and return
    let arr = string.split(" ");
    let newArr = arr.map((item) => {
      if (item.length > 4) {
        console.log(item.split("").reverse().join(""));
        return item.split("").reverse().join("");
      }
      else {
        return item;
      }
    })
    console.log(newArr)
    newArr = [...newArr]
    console.log(newArr[0])
    console.log(newArr.length)
    if (newArr.length === 1) {
      return newArr[0]
    }
    else {
      return newArr.join(" ")
    }
    
  }