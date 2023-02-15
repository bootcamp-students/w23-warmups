function multi(arr) {
    let sum = 1;
    for(i of arr){
      console.log(i);
      sum = sum*i;
      
    }
    return sum;
  }
  function add(arr) {
    let sum = 0;
    for(i of arr){
      console.log(i);
      sum += i;
      
    }
    return sum;
  }
  function reverse(str) {
    console.log(str)
    let split = str.split('');
    console.log(split)
    let reverse = split.reverse()
    console.log(reverse)
    let final = reverse.join('');
    console.log(final)
    return final;
  }