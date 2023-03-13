function findUniq(arr) {
    // sort arr
    // compare first value with second and last value
    arr.sort();
    if (arr[0] !== arr[1]){
      return arr[0];
    }
    else if (arr[arr.length - 1] !== arr[1]){
      return arr[arr.length - 1];
    }
    
  }
  