function getElement(array, indexes) {
    //   console.log(array);
    //   console.log(indexes);
    //   console.log(array[indexes]);
      // good luck

  let newArr = array;
    for (let i = 0; i < indexes.length; i++) {
        newArr = newArr[indexes[i]];
    }
      
  return newArr;
}
    
    console.log(getElement([[1, 2], [3, 4], [5, 6]], [0,0]), 1);
    console.log(getElement(['one','two','three'], [2]), 'three');
    console.log(getElement([[[ 1, 2, 3]]], [ 0, 0, 1 ]), 2);
    
    
    
    /* we have an array 
    [
    [1,2],
    [3,4],
    [5,6]
    ]
        
    our indexes is [0,0]
    
    loop through indexes array to access the correct index of array. 

    
    we need to get the number in the zero index of the zero index
    
    
    */