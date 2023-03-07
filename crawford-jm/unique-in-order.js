var uniqueInOrder=function(iterable){
  //declares output variable holding empty array
  let output = [];
  //loop over iterable
  for (let i = 0; i < iterable.length; i++) {
    //declare the current index
    let currentIndex = iterable[i];
    //declare the index that follows the current index
    let nextIndex = iterable[i + 1];
    //if current index is not equal to next index...
    if (currentIndex !== nextIndex){
      //push current index into output array
      output.push(currentIndex);
    }
  }
  return output;
}

//uniqueInOrder variable holds a function
//function takes a sequence
//return a list of items without any elements of same value next to it
//list of items returned should preserve original order of elements
