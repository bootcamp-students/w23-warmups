function getElement(array, indexes) {
    //Declare variable arrItems set to 0
    let arrItems = 0;
    //Declares varibale arr set to sliced array
    let arr = array.slice();
    //Loops over length of indexes
    for (let i = 0; i < indexes.length; i++) {
      //Assigns current index in loop to arr
      arr = arr[indexes[i]];
      //Assigns arr to arrItems
      arrItems = arr;
    }
    return arrItems;
  }

//getElement function takes array and indexes as arguments
//Function should return an element from multidimensional array by specified indeces
