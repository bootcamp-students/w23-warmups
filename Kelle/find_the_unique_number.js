function findUniq(arr) {
  // sort by numbers in array
  // find length of each array
  // return the array lenght = 1
  const length = arr.length;
  console.log(length);
//   return  arr.sort().map((i) => (i[1] == i[length-1] ? i[0] : i[length-1]));
  const i = arr.sort();
    return (i[1] === i[0] ? i[length-1] : i[0]);

  
}