function scramble(str1, str2) {
    const count = {}
    str1.split('').forEach((c) => {
      count[c] = count[c] ? (count[c] += 1) : 1
    })
    return str2.split('').every((c) => {
      return count[c]--
    })
  }
  
  /* if str1 characters match str2 
      return true
    else
      returns false */