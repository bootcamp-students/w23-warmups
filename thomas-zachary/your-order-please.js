function order(words){
    // sort string based on numbers in words
    // use for loop iterator to match number in strings???
    let arr = words.split(" ");
    let newArr = [];
    for (let i = 1 ; i <= arr.length; i++) {
      arr.forEach(word => {
        console.log(word)
        console.log(i)
        if (word.includes(i)) {
          newArr.push(word)
        }
        console.log(newArr)
      })
    }
    return newArr.join(" ")
  }