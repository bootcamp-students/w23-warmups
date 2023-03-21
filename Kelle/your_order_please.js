function order(words){
  //split into words
  //move the number to the front of the word
  //sort by number
  //extract the numbers
  const splitArr = words.split(" ");
  console.log(splitArr);
//   for (splitWords[i]; i; i++); {
//     const foundIndx = words.findIndex(el => el == itemToFind);
//     words.splice(foundIndx, i);
//     words.unshift(itemToFind);
//    console.log(foundIndx); 
//   }
//   console.log(splitWords.unshift(itemToFind));
  //console.log(splitArr)
  let newArr = []
  for(i = 0; i<= splitArr.length; i++)
    for(e in splitArr){
      if(splitArr[e].includes(i+1))
         {
        newArr[i] = splitArr[e]
      }
    }
let joinArr = newArr.join(" ")
return joinArr
}
  