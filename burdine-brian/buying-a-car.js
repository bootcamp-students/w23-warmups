function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let months = 0;
    if (startPriceOld >= startPriceNew) {
      return [months, Math.round(startPriceOld - startPriceNew)];
    }
    let [oldValue, savings, cost] = [startPriceOld, startPriceOld, startPriceNew];
    while (cost > savings) {
      months++;
      if (months % 2 === 0) {
        percentLossByMonth += 0.5;
      }
      oldValue *= (100 - percentLossByMonth) / 100;
      savings = oldValue + savingperMonth * months;
      cost *= (100 - percentLossByMonth) / 100;
    }
    return [months, Math.round(savings - cost)];
  }
  
  /*
  Pseudocode
  start nbMonths
  get startPriceOld, startPriceNew, savingperMonth, percentLossByMonth
  init months as 0
  if startPriceOld >= startPriceNew
    return months and startPriceOld - startPriceNew, rounded to nearest integer
  endif
  init oldValue as startPriceOld, savings as startPriceOld, cost as startPriceNew 
  while cost > savings
    increment month by 1
    if month divided by 2 has remainder zero
      increase percentLossByMonth by 0.5
    endif
    calculate oldValue as oldValue * (100 - percentLossByMonth) / 100
    calculate savings as oldValue + (month * savingperMonth)
    calcuate cost as cost * (100 - percentLossByMonth)
  endwhile
  return months and savings - cost, rounded to an integer
  */