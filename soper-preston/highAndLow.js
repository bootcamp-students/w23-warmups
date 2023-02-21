function highAndLow(numbers){
    // ...
    // split string into an array
    let halNumbers = numbers.split(" ");
    let high = Math.max(...halNumbers);
    let low = Math.min(...halNumbers);
    return high + (" ") + low;
  }