function createPhoneNumber(numbers){
  //function that accepts an array of 10 integers
  //all integers must be >=0 thru >9
  //return the integers in order with the formating using index number to keep them in place
  
  var newArr = numbers.slice(0,3).join("");
  var newArr2 = numbers.slice(3,6).join("");
  var newArr3 = numbers.slice(6,10).join("");
  console.log(newArr);
  console.log(newArr2);
  console.log(newArr3);
  var phone = ("(" + newArr + ")" + " " + newArr2 + "-" + newArr3);
  console.log(phone);
  return phone;
}