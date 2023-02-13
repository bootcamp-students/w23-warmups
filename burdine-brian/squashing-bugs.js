function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0;
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length;
        }
      }
      console.log(longest);
      return longest;
  }
  
  /*
  1. missing semicolon  on lines 4, 8, and 11
  2. missing '+' on line 6
  3. containing for loop execution in parentheses rather than brackets
  4. comparison in for loop should be i < spl.length
  5. spl(i) should be spl[i]
  6. function is wrapped in parentheses rather than brackets
  */