var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  //create an empty output array
  let output = [];
  //loop through iterable array of string letters
  for (let i = 0; i < iterable.length; i++) {
    let currentIndex = iterable[i];
    //currentIndex equals iterable array index
    let nextIndex = iterable[i + 1];
    //nextIndex equals iterable array index after currentIndex
    if (currentIndex !== nextIndex) {
      output.push(currentIndex);
    }
    //if currentIndex doesnt equal nextIndex, push that index string letter to the output empty array
  }
  return output;
}
