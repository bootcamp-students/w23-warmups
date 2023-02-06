/*
-You receive the total amount of the bill ex: 20
-You also receive a rating
  terrible(0%), poor(5%), good(10%), great(15%), excellent(20%)
-based on the rating you will calculate the tip
-turn the tip % into decimal form
-calculate the tip by taking amount * decimal tip(ex. 0.15) to git tip amount
-round up amount
**if rating is not recognized return "Rating not recognised"**
**rating are case sensitive and should all be uppercase**
*/


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
  
  console.log(calculateTip(20, "Excellent"));