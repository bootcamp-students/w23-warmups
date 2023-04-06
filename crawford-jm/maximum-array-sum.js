var maxSequence = function(arr){
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(0, arr[i] + currentSum);
    //console.log(currentSum);
    maxSum = Math.max(currentSum, maxSum)
    console.log(maxSum);
  }

  return maxSum;
}

//contigous - sharing a common border or touching
