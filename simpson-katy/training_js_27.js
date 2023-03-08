function countGrade(scores){
    let grade = {
      S: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      X: 0
    };
    scores.filter((score) => {
      if (score === 100) {
        grade.S++;
      } else if (score < 100 && score >= 90) {
        grade.A++;
      } else if (score < 90 && score >= 80) {
        grade.B++;
      } else if (score < 80 && score >= 60) {
        grade.C++;
      } else if (score < 60 && score >= 0) {
        grade.D++;
      }else if (score < 0) {
        grade.X++;
      }
    })
    return grade;
  }
  console.log(countGrade([50,60,70,80,90,100]));