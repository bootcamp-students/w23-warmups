// return masked string
// check if string is over 4
//    if under 4, return string
// map / loop over string
// if index < string length - 4
//    replace with #
function maskify(cc) {
    if (cc.length < 4) {
      return cc;
    }
    let arr = cc.split("");
    return arr.map((n, i) => ((i < cc.length - 4) ? n = "#" : n = n)).join("")
  }
  