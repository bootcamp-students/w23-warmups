function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
 
    // Check to see you even need to save first! If not, return out
    if(startPriceOld >= startPriceNew) {
      return [0, Math.round(startPriceOld - startPriceNew)];
    }
   
    // Otherwise, declare the months and the actual total 
    let months = 0, total = startPriceOld;
   
    // while loop to run while the total is less than the new price of the car
    while(total < startPriceNew) {
        // increment the savings per month onto the total
        total += savingperMonth;
     
        // decrease the total by the percentage loss per month
        total -= startPriceOld * percentLossByMonth / 100;
 
        // manipulate the start price new and old to reflect the percent loss by the current month
        startPriceNew -= startPriceNew * percentLossByMonth / 100;
        startPriceOld -= startPriceOld * percentLossByMonth / 100;
         
        // Increment the months
        months ++;
 
        // Use mod to determine even or odd month so that we know if we should increase the percentage loss by month by .5
        months % 2 !== 0 ? percentLossByMonth += 0.5 : percentLossByMonth;
     }
  
   
    return [months, Math.round(total - startPriceNew)];
  }