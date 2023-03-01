function createPhoneNumber(numbers){
  //slice first 3 integers into seperate array
  let areaCode = numbers.slice(0,3);
  //console.log(areaCode);
  let areaCodeNum = areaCode.join("");
  //console.log(areaCodeNum);
  console.log(areaCodeNum);
  
  let firstThree = numbers.slice(3,6);
  //console.log(firstThree);
  let firstThreeNum = firstThree.join("");
  //console.log(firstThreeNum);
  console.log(firstThreeNum);
  
  let lastThree = numbers.slice(6,10);
  //console.log(lastThree);
  let lastThreeNum = lastThree.join("");
  //console.log(phoneNum);
  console.log(lastThreeNum);
  
  let phoneNum = "(" + areaCodeNum + ")" + " " + firstThreeNum + "-" + lastThreeNum;
  console.log(phoneNum);
  return phoneNum;
}

//Function accepts array of 10 integers (0-9)
//Return a string in the form of a phone number
