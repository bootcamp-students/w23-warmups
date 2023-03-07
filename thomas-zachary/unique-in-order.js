var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  //always returns an array
  //make new empty array
  //figure a way to compare last pushed item in new array to current index of iterable
  //IF newarray last push === current index of iterable ,ignore it
  //else push to new array 
  let newArr = [];
  //   console.log(typeof(iterable))
  if (typeof(iterable) === "string") {
    //     console.log("first if")
    iterable = iterable.split("")
  }
  
  console.log(iterable)
  for (let i = 0; i < iterable.length; i++) {
    console.log(newArr)
    if (iterable[i] == newArr[newArr.length - 1]) {
      continue;
    }
    else {
      newArr.push(iterable[i])
    }
  }
  
  return newArr
}