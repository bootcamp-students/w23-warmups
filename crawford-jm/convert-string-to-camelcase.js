function toCamelCase(str){
  //turning string into an array
  str = str.split('');
  //returns map method of new string array that applys function to each element in array
  return str.map(function(element, i){
    //if the element is a - or a _
    if(element == '-' || element == '_'){
      //turn the next str index array element into capital letter
      element = str[i+1].toUpperCase();
      str.splice(i+1, 1);
    }
    //returns element joined back together in strings
    return element;
  }).join('');
}
