function between(a, b) { //'between' function takes the integers 'a' and 'b'
    // your code here
    let arr = []; //declared a variable 'arr' assigned to an empty array
    for (let i = a; i <= b; i++) { //This for loop is going to start iterating through the array 'arr'
      arr.push(i); //Its pushing the results of our for loop to the array variable 'arr'
    }
    return arr; //return an array arr 
  }
