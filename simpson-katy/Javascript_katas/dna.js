function DNAStrand(dna){
    let dnaArr = dna.split("");
    let newDNA = [];
    
    for (let i = 0; i < dnaArr.length; i++) {
      if (dnaArr[i] === "A") {
        newDNA.push("T");
      } else if (dnaArr[i] === "T") {
        newDNA.push("A");
      } else if (dnaArr[i] === "G") {
        newDNA.push("C");
      } else if (dnaArr[i] === "C") {
        newDNA.push("G");
      }
    }
    return newDNA.join("");
  }
  
  console.log(DNAStrand("AAAA"));