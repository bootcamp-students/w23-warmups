function calculateTip(amount, rating) {
    //get total amount
    //get rating
    //find percent of total amount * percent of tip 
    //object to translate rating into tip percentage
    let o = {
      "EXCELLENT": .20,
      "GREAT" : .15,
      "GOOD" : .10,
      "POOR" : .05,
      "TERRIBLE" : .00
    }
    //catch  incorrect inputs
      if (o[rating.toUpperCase()] == undefined) {
        return "Rating not recognised"
      }
      //round up tip 
      let x = Math.ceil(amount * o[rating.toUpperCase()]);
      
      //all this because of forgot parentheses for the uppercase method call
    //    console.log(rating.toUpperCase());
    //   console.log(Math.round(amount * o[rating.toUpperCase()]))
       console.log(x);
    
    //return tip
      return x;
    }