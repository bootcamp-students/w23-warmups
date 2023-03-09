function countGrade(scores){
    //coding here...
    //console.log(scores);
    const count = {
      S: scores.filter(grade => grade == 100).length,
      A: scores.filter(grade => grade < 100 && grade >= 90).length,
      B: scores.filter(grade => grade < 90 && grade >= 80).length,
      C: scores.filter(grade => grade < 80 && grade >= 60).length,
      D: scores.filter(grade => grade < 60 && grade >= 0).length,
      X: scores.filter(grade => grade == -1).length
    }
    //console.log(count);
    return count;
  }
  
  /*
    Pseudocode
    start countGrade
    get scores
    init an object count
      set the S property of count to the number of 100 values in scores
      set the A property of count to the number of values between 100 and 90 in scores
      set the B property of count to the number of values between 90 and 80 in scores
      set the C property of count to the number of values between 80 and 60 in scores
      set the D property of count to the number of values between 60 and 0 in scores
      set the X property of count to the number of -1 values in scores
    return count
    end countGrade
  */