function DNAStrand(dna){
    //for every char in string 
    //convert to complementary char
    //return completmentary string for whole string
    //need a way to have two chars assigned to each other so we don't need a lot of if statements
    let arr = dna.split("");
    let newArr = [];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      switch(arr[i]){
          case "A": newArr.push("T");
            break;
          case "T": newArr.push("A");
            break;
          case "C": newArr.push("G");
            break;
          case "G": newArr.push("C");
            break;  
      }
      console.log(newArr)
    }
    return newArr.join("");
  }