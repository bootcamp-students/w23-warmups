function longest(s1, s2) {
  //Declare variable combined concatenating strings s1 and s2
  let combined = s1 + s2;
  //strSplt splits combined string into new array
  let strSplt = combined.split("")
  //newArry holding empty array
  let newArr = [];
  //Loop over strSplt..
  for (let i = 0; i < strSplt.length; i++){
     //if strSplt doesn't contain letter at current index in loop...
     if (!newArr.includes(strSplt[i])){
        //push letter from strSplt into newArray
        newArr.push(strSplt[i])
     } 
  }
  //Variable sorts newArr into arrSort
  let arrSort = newArr.sort()
  //output joins arrSort
  let output = arrSort.join(",")
  //returns output array as string
  return output.replaceAll(",", "")
  }

//Function takes 2 strings (s1 and s2)
//String include only letters from a to z
//Return a sorted array
//Sorted array should include 1 each letter that occurs in both string
