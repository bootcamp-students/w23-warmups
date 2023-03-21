function countGrade(scores){
  //loop through the scores looking for each grade rule
  //return the # of scores for each grade
  const grades = { 
    S: scores.filter(x => x == 100).length,
    A: scores.filter(x => x < 100 && x >= 90).length,
    B: scores.filter(x => x < 90 && x >= 80).length,
    C: scores.filter(x => x < 80 && x >= 60).length,
    D: scores.filter(x => x < 60 && x >= 0).length,
    X: scores.filter(x => x == -1).length,
  };
  
return grades;
  }