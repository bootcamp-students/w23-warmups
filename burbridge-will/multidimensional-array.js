function getElement(array, indexes) {
    // good luck
    let arrItems = 0;
    let arr = array.slice();
    for (let i = 0; i < indexes.length; i++) {
      arr = arr[indexes[i]];
      arrItems = arr;
    }
    return arrItems;
  }
  
  //declared a variable "arrItems" with a value of 0
  //declared a variable "arr" with a value of array.slice() to make a copied portion of the array
  //Looping through the indexes and returning each index in the array