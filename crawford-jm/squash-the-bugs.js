//First bug fixed by wrapping findLongest function in curly braces
function findLongest(str) {
  
  var spl = str.split(" ");
  var longest = 0
  
  //Second bug fixed by adding + to i+ to make it increment
  //Third bug fixed by wrapping for loop in curly braces
  //Fourth bug fixed when i is less than split string length
  for (var i = 0; i < spl.length; i++) {
    //Fifth bug fixed matching spl(i) to spl[i]
    if (spl[i].length > longest) {
      longest = spl[i].length
    }
   }
    return longest
}
