function spinWords(string){
  return string.split(' ').map(value => {if (value.length > 4) return value.split('').reverse().join(''); 
  return value}).join(" ");
  
  //console.log(string.length);
  //pull out words that are 5 or more letters
  
  //let newArray = string.split('');
  //console.log(newArray);
  //let reverseArray = newArray.reverse().join('');
  //console.log(reverseArray);
  //for (let i = 0; i < newArray.length; i++) {
    //if (newArray[i].length >= 5) {
      //return reverseArray[i].push();
    //}
  //}
}
