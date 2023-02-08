//Where a<b return all the numbers between a & b including a & b.
function between(a, b) {
//assign lowEnd and highEnd
  var lowEnd = a;
  var highEnd = b;
//create variable to list all numbers  
  var list = [];
//math to create number array  
  for (var i = lowEnd; i <= highEnd; i++) {
    list.push(i);
  }
  return list;
}
//Test Cases
console.log(between(1,4));
console.log(between(-2,2));

//function between(a, b) {
//let x = []
//  for (;a < b + 1; a++) {
//    x.push(a);
//  }
// return x;

