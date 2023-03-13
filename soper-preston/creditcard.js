function maskify(cc) {
    let newStr = "";
      cc = cc.split("");
      
      for (let i = 0; i < cc.length - 4; i++) {
        cc[i] = "#";
        console.log(cc[i]);
      }
      return cc.join("");
    }

    //We were close but our output was backwards, Keith helped us straighten it out