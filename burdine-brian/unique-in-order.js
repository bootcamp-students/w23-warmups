var uniqueInOrder=function(iterable){
    console.log(iterable);
    let uniqueSequence = [];
    for (let item of iterable) {
      if (item != uniqueSequence[uniqueSequence.length -1]) {
        uniqueSequence.push(item);
      }
    }
    console.log(uniqueSequence);
    return uniqueSequence;
  }
  
  /*
    Pseudocode
    start uniqueInOrder
    read iterable
    init uniqueSequence as an empty array
    for every item in iterable
      if the current item is not equal to the last item in uniqueSequence
        add the current item to uniqueSequence
      endif
    endfor
    return uniqueSequence
    end uniqueInOrder
  */