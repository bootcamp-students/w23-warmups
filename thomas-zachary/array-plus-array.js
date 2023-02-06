function arrayPlusArray(arr1, arr2) {
    //sum variable all number will be added into
    let sum = 0;
    //extract numbers from arrays
  //   console.log(arr1);
  //   console.log(arr2);
    for (let i = 0; i < arr1.length; i++) {
      sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
      sum += arr2[i];
    }
   
    //why did "for...in" loop not work??
  //   for (num in arr1) {
  //     console.log(num);
  //     sum = sum + Number(num);
  //   }
  // //   console.log(sum);
  //   for (num in arr2) {
  //     console.log(num)
  //     sum += Number(num);
  //     console.log(sum + "sum")
  //   }
  //   console.log(sum);
    
    
    //function to input any array and a variable it will add onto?X(no good)
        //for num in arr add to sum variable?
    //add numbers together
      //sum +=?
    //append all number
    return sum; //something went wrong
  }