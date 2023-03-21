function maskify(cc) {
    let maskArr = cc.split("");
    for (let i = 0; i < maskArr.length - 4; i++) {
      maskArr[i] = "#";
    }
    return maskArr.join("");
  }
  
  /*
    Pseudocode
    start maskify
    get cc
    for each character up to four characters away from the end of cc
      replace the character with '#'
    end for
    return cc
    end maskify
  */