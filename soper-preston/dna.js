function DNAStrand(dna){
    //Mostly Brian, I originally thought using an if statement, but he wanted to use a switch case which makes it much easier
    let newDNA = dna.split("").map(symbol => {
      switch (symbol) {
          case 'A':
            return 'T';
          case 'C':
            return 'G';
          case 'G':
            return 'C';
          case 'T':
            return 'A';
      }
    }).join("");
    console.log(dna, newDNA);
    return newDNA;
    }