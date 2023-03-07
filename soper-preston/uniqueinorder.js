var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
  //   let splitArr = iterable.split("")
    let newArr = [];
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) {
        newArr.push(iterable[i])
      }
    }
    return newArr;
  };
  console.log(uniqueInOrder('AAAABBBCCDAABBB'));