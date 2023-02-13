function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0;
  
  for (var i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
    }
    return longest
}

// had parentheses instead of curly brackets
// had only one + instead of two for the increment part of the for loop
// had mixed parentheses with curly brackets on the for loop and if statement
// compare symbol is backwards for the for loop condition
// tried using parentheses () instead of square [] for getting something out of an array