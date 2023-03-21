function findUniq(arr) {
    let uniqArr = [];
    let uniqNum = [];
    for (let num of arr) {
      if (!uniqArr.includes(num)) {
        uniqArr.push(num);
        uniqNum.push(num);
      } else {
        uniqNum = uniqNum.filter((value) => value != num);
      }
    }
    console.log(arr, uniqArr, uniqNum[0]);
    return uniqNum[0];
  }
  
  /*
    Pseudocode
    start findUniq
    get arr
    init uniqArr, uniqNum as empty arrays
    for every number in arr
      if number is not in uniqArr
        add number to uniqArr
        add number to uniqNum
      else
        remove number from uniqNum
      endif
    endfor
    return uniqNum
    end findUniq
  */