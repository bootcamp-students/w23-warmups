function findUniq(arr) {
    // do magic
    //newArr = push different number here
    let newArr = [];
    let difNum = [];
    //loop through the array
    for (let num of arr) {
      //if num === arr[i] skip it (i++)
      if (!newArr.includes(num)) {
        difNum.push(num);
        newArr.push(num);
      } else {
        difNum = difNum.filter((a) => {
          return a !== num; 
        })
      }
    }
    return difNum[0];
  }
  
  console.log(findUniq([ 1, 0, 0 ]));
  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
  