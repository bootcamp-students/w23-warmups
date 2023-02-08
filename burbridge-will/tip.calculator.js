function calculateTip(amount, rating) {
    rating = rating.toUpperCase();
    //Declaring a variable called "tipAmount"
    let tipAmount = 0;
    //If statement on the rating of service:
    if (rating === "EXCELLENT") { //IF the rating given was 'EXCELLENT', multiply 20% to amount to get tip.
        tipAmount = amount * 0.20;
      } else if (rating === "GREAT") { //ELSE IF the rating that was given was 'GREAT', multiply 15% to amount to get tip.
        tipAmount = amount * 0.15;
      } else if (rating === "GOOD") { //ELSE IF the rating that was given was 'GOOD', multiply 10% to amount to get tip.
        tipAmount = amount * 0.10;
      } else if (rating === "POOR") { //ELSE IF the rating that was given was 'POOR', multiply 5% to amount to get tip.
        tipAmount = amount * 0.05;
      } else if (rating === "TERRIBLE") { //ELSE IF the rating was 'TERRIBLE', then no tip.
        tipAmount = amount * 0;
      } else {
        return "Rating not recognised";
      }
      
      return Math.ceil(tipAmount); //Rounds the tip amount to the nearest interger UP. i.e. "to the CEILING"
    } 