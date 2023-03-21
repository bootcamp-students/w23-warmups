function toCamelCase(str){
  //create new array which sorts by the - or _ 
  //index 0 stays what it is all other index change toUpperCase and join back together.

//   return str.split(/[,_-]+/).map( (s, i) => i !== 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s).join('');
      
  let regExp =/[-_]\w/ig;
    return str.replace(regExp,function(match){
      return match.charAt(1).toUpperCase();
    });
  }