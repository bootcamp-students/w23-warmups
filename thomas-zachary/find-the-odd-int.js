function findOdd(A) {
    //for every number in array add to its own number count
    //find out which number count is odd
    //objects are key/value pairs
    //how to check if an object key is already taken if not then declare new object key/value pair
  //   let times = {};
  //   for (let i = 0; i < A.length; i++) {
  //     if (times[i] )
  //   }
  //   return 0;
        const freq = {};
      for(const num of A){
          freq[num] = (freq[num] || 0) + 1;
        console.log(freq)
        console.log(freq[num])
      }
      return +Object.keys(freq).find(num => freq[num] % 2 == 1);
  }