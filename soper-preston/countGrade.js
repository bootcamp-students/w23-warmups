function countGrade(scores){
    let gradeArray = {
      S: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      X: 0
    };
    scores.filter((score) => {
      if (score === 100) {
        gradeArray.S += 1;
      } else if (score<100 && score>=90) {
        gradeArray.A += 1;
      } else if (score<90 && score>=80) {
        gradeArray.B += 1;
      } else if (score<80 && score>=60) {
        gradeArray.C += 1;
      } else if (score<60 && score>=0) {
        gradeArray.D += 1;
      }else if (score < 0) {
        gradeArray.X += 1;
      }
    })
    return gradeArray;
    console.log(gradeArray)
  }
  console.log(countGrade([50,60,70,80,90,100]));