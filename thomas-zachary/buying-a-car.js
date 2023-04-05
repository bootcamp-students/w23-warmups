function nbMonths(startPriceOld, startPriceNew, savingPerMonth, percentLossByMonth){
  // percent loss starts at 1.5 but every two months increase by .5 
  // old car value will be traded in on new car
  // 1000 dollars per month saved
  // RETURN [MONTH, LEFTOVER MONEY]
  // START each month by comparing (oldCarValue + sum of saved money) to new car value(after percentLoss)
  // INIT month variable to check for every other month and to return for how many months it took 
  // WHILE OldCarValue + SavedSum < NewCarValue
  // IF month % 2 == 0
  //    percentLossByMonth += 0.5
  // for both cars carValue -= carValue * percentLoss
  // savedSum += 1000
  // ENDWHILE 
  // return [Month Variable, RoundDown((OldCarValue + SavedSum) - NewCarValue)]
  let savedSum = 0;
  let month = 0;
  while ((startPriceOld + savedSum) < startPriceNew) {
    month += 1
    if (month % 2 == 0) {
      percentLossByMonth += 0.5
    }
    let percentage = percentLossByMonth / 100
    startPriceOld -= startPriceOld * percentage
    startPriceNew -= startPriceNew * percentage
    savedSum += savingPerMonth
//     console.log(startPriceOld + savedSum - startPriceNew)
  }
//   console.log(startPriceOld + savedSum)
//   console.log(startPriceNew)
  return[month, Math.round((startPriceOld + savedSum) - startPriceNew)]
}