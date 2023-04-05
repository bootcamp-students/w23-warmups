function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let income = 0;
    let hisCar = startPriceOld;
    let newCar = startPriceNew;
    let month = 0;
    let percentLoss = percentLossByMonth;
    while (income + hisCar < newCar) {
      month++; //increases month by 1  
      income += savingperMonth; //increases income by 1000 
      if (month % 2 == 0) { //if month is odd it will increase percentLoss by .5
        percentLoss += 0.5;
      }
      hisCar *= (1 - percentLoss / 100); //value of his car after month 
      newCar *= (1 - percentLoss / 100);//value of new car after month
    }
    let balance = income + hisCar - newCar; // value of old car + current income
    return [month, Math.round(balance)];
  }
  //   (╥﹏╥)  I do not like Math Keith!!
  console.log(nbMonths(2000, 8000, 1000, 1.5));
  
  /*
  
  
  money = 0; increases by 1000 each month (1000)
  month = []
  
  while (money <= newCar) {
    month =+ 1
    startPriceOld = money
    startPriceOld = hisCar
    hisCar = startPriceOld 2000 * 0.015 = 30 (1970)
    1000 + 1970 = 2970
    newCar = startPriceNew
    newCar = startPriceNew 8000 * 0.015 = 120 7880  
  }
  
  his car = startPriceOld 2000 * 0.015 = 30 (1970)
  
  1000 + 1970 = 2970
  
  new car = startPriceNew 8000 * 0.015 = 120 7880
  
  
  */