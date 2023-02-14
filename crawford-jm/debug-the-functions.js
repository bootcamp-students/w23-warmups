function multi(arr) {
  //Reduce method multiplies index 0 and 1, then multiplays result by index 2
  return arr.reduce((a,b)=>a*b,1);
}
function add(arr) {
  //Reduce method adds index 0 and 1, then adds results to index 2
  return arr.reduce((a,b)=>a+b,0);
}
function reverse(str) {
  //Splits string, then reverses it, then joins it
  return str.split('').reverse().join('');
}

//Debug code to make functions work
//Why aren't these functions working?
