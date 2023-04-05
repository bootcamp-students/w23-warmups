function scramble(str1, str2) {
    let c1Count = {}
    let c2Count = {};
    
    if (str2.length > str1.length) {
      return false;
    }
    
    for (let c2 of str2) {
      if (c2Count[c2] == undefined) {
        c2Count[c2] = 1;
      } else {
        c2Count[c2]++;
      }
    }
    
    for (let c1 of str1) {
      if (c2Count[c1] != undefined) {
        if (c1Count[c1] == undefined) {
          c1Count[c1] = 1;
        } else {
          c1Count[c1]++;
        }
      }
    }
    
    for (let c in c2Count) {
      if (c1Count[c] == undefined) {
        return false;
      }
      else if (c1Count[c] < c2Count[c]) {
        return false;
      }
    }
    
    return true;
  }