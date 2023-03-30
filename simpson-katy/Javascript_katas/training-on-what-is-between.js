function between(a, b) {
    var lowEnd = a;
    var highEnd = b;
    var list = [];
    for (var i = lowEnd; i <= highEnd; i++) {
      list.push(i);
    }
    return list;
  }
  
  console.log(between(1,4))