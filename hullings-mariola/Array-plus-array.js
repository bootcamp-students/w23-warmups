function arrayPlusArray(arr1, arr2) {
    let addUp = arr1.concat(arr2);
    let sum = 0
    for (let i = 0; i < addUp.length; i++){
    sum = addUp[i]+sum;
      console.log(sum);
    }
    return sum;
    }