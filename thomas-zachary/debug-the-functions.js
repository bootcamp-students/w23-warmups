function multi(arr) {
    //multiply all the contents of an array together
    //arr[0] * arr[1] * arr[2]...etc
    //we dont know set size so need arr.length
    let total = 1;
    for (let i = 0; i < arr.length; i++) {
      total *= arr[i]
    }
    return total;
  }
  function add(arr) {
    //add all the contents of an array together
    //arr[0] + arr[1] + arr[2]...etc
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i]
    }
    return total;
  }
  function reverse(str) {
    //make new empty string
    //start from rear of old string
    //add last character of old string to new string first then decrement down
    
    //ENDed up splitting string into an array 
    //.reversing the array
    //then joing the array again into a string
    let newStr = []
    let x = str.split("");
    console.log(x);
    let y = x.reverse();
    return y.join("");
  }