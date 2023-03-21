// function DNAStrand(dna){
//   //separate the string
//   //replace a with t and c with g and vice versa
//   //combine the string and return the new value
  
//   let newArray = dna.split("");
  
//   console.log(newArray);
  
//   let newDNA = newArray.replace(/A/gi,"T").join();
  
//   console.log(newDNA);
  
//   return(newDNA);
 
// }

function DNAStrand(dna){
  //your code here
  let splitDNA = dna.split("");
  for(letter in splitDNA){
    if(splitDNA[letter] == "A"){
      splitDNA[letter] = "T"
    }
    else if(splitDNA[letter] == "T"){
      splitDNA[letter] = "A"
    }
    if(splitDNA[letter] == "G"){
      splitDNA[letter] = "C"
    }
    else if(splitDNA[letter] == "C"){
      splitDNA[letter] = "G"
    }
  }
  let joinedDNA = splitDNA.join("");
  console.log(joinedDNA)
  return(joinedDNA)
}