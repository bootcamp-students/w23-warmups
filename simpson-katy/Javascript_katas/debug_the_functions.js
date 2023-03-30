function multi(arr) {
    //loop through the arr and multiple the next number to the running total. 
    let multiple = 1; //Base number must be one to work (because if you multiply by zero it will always be 0!)
    for (let i = 0; i < arr.length; i++) {
      multiple *= arr[i];
    } 
    return multiple;
  }
  
  
  function add(arr) {
    //loop through the arr adding the next number to the sum of all nums. return total sum.
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  
  function reverse(str) {
    let strArr = str.split(""); //split the str into an array so it can be reversed
    let reverseArr = strArr.reverse(); //reverse the array 
    let newStr = reverseArr.join(""); //join the array together to get the reverse of the string!
    return newStr;
  }
  
  console.log(multi([5, 1, 5])); //25
  console.log(add([9, 8, 5])); //22
  console.log(reverse("Hello")); //olleH
