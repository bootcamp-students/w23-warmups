function findUniq(arr) {
  //console.log("Initial input", arr);
  arr = arr.sort();
  let group = [];
  let unique = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== arr[i+1] && arr[i] !== arr[i-1]) {
    unique.push(arr[i]);
    console.log("Unique", unique);
  } 
}
return unique[0]
}

//Given an array of numbers...
//Find the one number that isnt the same as the rest
//Given array will always be at least 3 integers

//loop through arr
//given a condition, push to a newArr1
  //else push to newArr2
