function pigIt(str){

    let arr = str.split(' ');
    return arr.map((pig) => {
          if (pig === '!' || pig === '?') {
            return pig
            }
          return pig.substr(1, pig.length) + pig.substr(0, 1) + "ay";
        }).join(" ")
        
  }