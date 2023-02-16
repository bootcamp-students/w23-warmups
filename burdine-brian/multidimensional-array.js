function getElement(array, indexes) {
    // good luck
    let result = array;
    for (let i = 0; i < indexes.length; i++) {
      result = result[indexes[i]];
      console.log(result);
    }
    return result;
  }
  
  /*
    Pseudocode
    START getElement
    READ array, indexes
    INIT result equal to array
    FOR the length of indexes 
      SET result to the value of result at the current index of indexes
    ENDFOR
    RETURN result
    END getElement
  */
  