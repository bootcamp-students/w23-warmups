function getElement(array, indexes) {
    // uses first index to go into first array
    // uses second for second array and so on
    // will always be enough indexes to reach all parts of array
    
     for (let i = 0; i < indexes.length; i++) {
    //    console.log(array);
    //    console.log(indexes);
    //    console.log(array[indexes[i]])
    //every loop digs deeper into overall array into the smaller arrays
       array = array[indexes[i]]
     }
    return array
  }