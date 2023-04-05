function scramble(str1, str2) {
    // DOES NOT WORK WITH LONG STRINGS
//   check if all letters from str2 are in str1
//   split both str into arrays
//   somehow remove letters that have already been matched?
//   FOR letter in str2
//    IF letter NOT in str1?
//      RETURN FALSE
//   RETURN true
  arr1 = str1.split('');
  arr2 = str2.split('');
  for (let letter in arr1){
    for (let letter2 in arr2){
      if (arr1[letter] == arr2[letter2]){
        console.log("found")
        console.log(arr1[letter])
        console.log(arr2)
        arr2.splice(letter2, 1)
        continue
      } 
      }
    }
  console.log(arr2.length)
  if (arr2.length !== 0){ 
    console.log("false")
    return false
  } else {
    console.log('true')
  return true
  }
}