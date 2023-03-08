function countGrade(scores){
    //coding here...
    let x = {S:0, A:0, B:0, C:0, D:0, X:0}
    x.S = scores.filter(score => score === 100).length
    x.A = scores.filter(score => score < 100 && score >= 90).length
    x.B = scores.filter(score => score < 90 && score >= 80).length
    x.C = scores.filter(score => score < 80 && score >= 60).length
    x.D = scores.filter(score => score < 60 && score >= 0).length
    x.X = scores.filter(score => score === -1).length
    return x
  }