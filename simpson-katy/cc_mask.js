// return masked string
function maskify(cc) {
    let maskArr = cc.split("");
    for (let i = 0; i < maskArr.length - 4; i++) {
      maskArr[i] = "#";
    }
    return maskArr.join("");
  }
  
  console.log(maskify('4556364607935616'));