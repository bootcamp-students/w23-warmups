function createPhoneNumber(numbers){
  //slice first 3 of array to put inside parentheses
  //slice 3 after the first 3 for part before -
  //finally slice final 4 
  //add all sliced arrays together with parentheses and dash in strings
  let areaCode = numbers.slice(0, 3)
  let firstThree = numbers.slice(3, 6)
  let finalFour = numbers.slice(6, 10)
  console.log(areaCode, firstThree, finalFour)
  return ("(" + areaCode.join("") + ") " + firstThree.join("") + "-" + finalFour.join(""))
}
