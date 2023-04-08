var maxSequence = function(arr){
    // find maximum sunm with continuous subarray
    // if array is all negatives or empty return 0
    // INIT max_start, max_end, 
    // FOR loop through the array
    //    max_end keeps adding array values through loop
    //    if max_end goes under 0, reset it to 0
    //    max will equal max_end if it goes higher than it
    // RETURN max
    // 
    if (arr.length == 0) {
      return 0
    }
  
    let max = 0;
    let max_end = 0;
    for (let x of arr){
      
      max_end += x
      
      if (max < max_end) {
        max = max_end;
  
      }
      
      if (max_end < 0) {
        max_end = 0
      }
      
  
    }
    return max
    
  }