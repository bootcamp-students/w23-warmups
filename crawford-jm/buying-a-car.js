function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let income = 0;
    let hisCar = startPriceOld;
    let newCar = startPriceNew;
    let month = 0;
    let percentLoss = percentLossByMonth;
    while (income + hisCar < newCar) {
      month++;  
      income += savingperMonth;
      if (month % 2 == 0) {
        percentLoss += 0.5;
      }
      hisCar *= (1 - percentLoss / 100); 
      newCar *= (1 - percentLoss / 100);
    }
    let balance = income + hisCar - newCar;
    return [month, Math.round(balance)];
  }
