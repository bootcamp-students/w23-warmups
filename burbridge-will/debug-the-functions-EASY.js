function multi(arr) {
    return arr.reduce((a,b)=>a*b, 1);
  }
  
  function add(arr) {
    return arr.reduce((a,b)=>a+b, 0);
  }
  
  function reverse(str) {
    return str.split('').reverse().join('');
  }
  
  /* Function multi uses reduce method to multiple a and b 
  THEN takes that result and mulitplies that result to index 1. */
  
  // Function add does similar to multi
  
  /* the reverse function splits the string into an array, 
  reverses the indexes, and rejoins them */