// return masked string
function maskify(cc) {
  //console.log("Logged input", cc);
  let arr = cc.split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 4 ) {
      newArr.push("#");
    } else {
      newArr.push(arr[i]);
    }
  }
  console.log("Logged newArr", newArr);
  return newArr.join("");
}

//Convert every character except the last four to '#'
