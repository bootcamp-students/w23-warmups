var uniqueInOrder=function(iterable){
  //remove index 0, compare next index 0
  //if it does equal then move to next until it's not equal
  //add that new digit to the first one we removed and 
  //loop through again to find next one that doesn't match current search
  
  //your code here - remember iterable can be a string or an array
  let array = [];
  
  for(let i = 0; i < iterable.length; i++) {
    if(iterable[i] !== iterable[i+1]) {
      array.push(iterable[i]);
    }
  }
  return array;
}  