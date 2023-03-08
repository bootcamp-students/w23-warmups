function countGrade(scores){
  //coding here...
  let outputArr = {
    S: scores.filter(num => num == 100).length,
    //console.log("S", S)
    A: scores.filter(num => num < 100 && num >= 90).length,
    //console.log("A", A);
    B: scores.filter(num => num < 90 && num >= 80).length,
    //console.log("B", B);
    C: scores.filter(num => num < 80 && num >= 60).length,
    //console.log("C", C);
    D: scores.filter(num => num < 60 && num >= 0).length,
    //console.log("D", D);
    X: scores.filter(num => num <= -1).length,
    //console.log("X", X);
  }; 
  console.log(outputArr);
  return outputArr;
}
