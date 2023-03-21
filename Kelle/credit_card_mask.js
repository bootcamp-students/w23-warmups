// return masked string
function maskify(cc) {
  //find length of string, 
    const string = cc.length;
    console.log(string);
    const hash = string-4
    console.log(hash);
  
    return cc.split("").map((h,i) => (i<hash) ? h="#" : h).join(""); 
    console.log()
  }