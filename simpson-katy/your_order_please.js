function order(words) {
    let newArray = [];
    words = words.split(" ");
    for (let i = 1; i <= words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        if (words[j].includes(i)) {
            newArray.push(words[j]);
        }     
      }
    }
    return newArray.join(" ");
  }
  