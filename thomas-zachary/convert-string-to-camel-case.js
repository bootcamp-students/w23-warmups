function toCamelCase(str){
  // convert string to array based off of dash-underscore
  // IF first index of array is already capitalized at start, leave it capitalized
  // all other array index past the first need first letter capitalized
  
  if (str.length === 0) {
    return str;
  }
  //replace all underscores to be dashes so only have to split on dashes
  let str1 = str.replace(/_/g, "-")
  console.log("string", str1)
  let arr = str1.split("-");
  //   arr = arr.join("").split("_")
  console.log("array", arr)
  //   console.log(arr[0][0])
  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  console.log("arr after loop", arr)
  return arr.join("");
}