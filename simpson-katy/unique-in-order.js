var uniqueInOrder=function(iterable){
    let newArr = [];
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] !== iterable[i + 1]) {
        newArr.push(iterable[i])
      } 
    }
    return newArr;
  };
  
  console.log(uniqueInOrder('AAAABBBCCDAABBB'));
  console.log(uniqueInOrder('ABBCcAD'));
  console.log(uniqueInOrder([1,2,2,3,3]));