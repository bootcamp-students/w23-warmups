function DNAStrand(dna){
    let complement = dna.split("").map(symbol => {
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
    console.log(dna, complement);
    return complement;
  }
  
  /*
    Pseudocode
    start DNAStrand
    read dna
    split dna into an array
    for symbol in dna
      switch symbol
        case of
          A: return T 
          C: return G
          G: return C
          T: return A
      end switch
    end for
    join the resulting array into a string (complement)
    return complement
    end DNAStrand
  */