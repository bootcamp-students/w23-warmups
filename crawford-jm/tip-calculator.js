function calculateTip(amount, rating) {
    rating = rating.toUpperCase();
    let tipAmount = 0;
    if (rating === "EXCELLENT") { 
        tipAmount = amount * 0.20;
      } else if (rating === "GREAT") { 
        tipAmount = amount * 0.15;
      } else if (rating === "GOOD") { 
        tipAmount = amount * 0.10;
      } else if (rating === "POOR") { 
        tipAmount = amount * 0.05;
      } else if (rating === "TERRIBLE") {
        tipAmount = amount * 0;
      } else {
        return "Rating not recognised";
      }
      
      return Math.ceil(tipAmount);
    } 
