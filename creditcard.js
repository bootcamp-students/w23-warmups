function maskify(cc) {
    if (cc.length > 4) {
      return "#".repeat(cc.length - 4) + cc.slice(-4);
    } else {
      return cc;
      console.log(cc)
    }
  }
  