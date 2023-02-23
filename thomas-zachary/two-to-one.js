function longest(s1, s2) {
  // using letters from s1 and s2
  // no repeat letters allowed
  // longest string possible with only distinct letters from s1/s2
  // concatenate s1 and s2 together 
  // make new string/array and push value from s1/s2 unless value already in new string/array
  let combined = s1 + s2;
  let strSplt = combined.split("")
  let newArr = [];
  for (let i = 0; i < strSplt.length; i++){
     if (!newArr.includes(strSplt[i])){
        newArr.push(strSplt[i])
     } 
  }
  let arrSort = newArr.sort()
  console.log(arrSort.join(","))
  let output = arrSort.join(",")
  return output.replaceAll(",", "")
  }