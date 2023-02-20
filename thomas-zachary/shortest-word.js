function findShort(s){
  // split string into an array
  // for loop to go trhough array
  // empty variable to store the shortest string.length  until forloop encounters a more large word
  // after loop finishes 
  // return variable
  let arr = s.split(" ");
  let short = arr[0];
  for (let i = 0; i < arr.length; i++) {
    console.log(short.length)
    if (short.length > arr[i].length) {
      console.log(short)
      short = arr[i];
    }
  }
  return short.length;
}