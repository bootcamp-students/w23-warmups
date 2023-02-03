function generateRange(min, max, step){
    //make an array
      const arr = [];
    //for loop using step as increment
    //start at min
      for (; min <= max; min += step){
        //add to arr[i] for every loop
        arr.push(min);
      }
      //return array
      return arr;
    }