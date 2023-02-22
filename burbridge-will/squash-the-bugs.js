//1st: Fixed function syntax by replacing the parenthesis with curly braces
function findLongest(str) {
  
    let spl = str.split(" ");
    let longest = 0;
    //2nd: Added an addition "+" sign to "i+" making it the appropriate increment operator
    //3rd: Replacing the parenthesis with curly braces for the "for loop"
    for (let i = 0; i > spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length;
      }
      return longest;
    }
  }