function generateRange(min, max, step){
    var newArr = [min];
    for (let i = min; i < max;) {
      newArr.push(i += step);
    }
    for (let i = 0; i <= newArr.length; i++) {
      if (newArr[i] > max) {
        newArr.pop(newArr[i]);
      }
    }
    
    return newArr;
  }
  
  
  console.log(generateRange(2,10,2));
  console.log(generateRange(1,10,3));
  //first init - min value
  //second init - max value
  //third init - step (or how much each on changes)