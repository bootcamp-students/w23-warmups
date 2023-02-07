/*
  Pseudocode
    START
    READ amount, rating
    INIT tip as 0
    CASE rating [converted to lowercase] of
      terrible: SHOW tip
      poor: CALCULATE tip = amount * 0.05 (round up decimal), SHOW tip
      good: CALCULATE tip = amount * 0.1 (rounded up decimal), SHOW tip
      great: CALCULATE tip = amount * 0.15 (rounded up decimal), SHOW tip
      excellent: CALCULATE tip = amount * 0.2 (rounded up decimal), SHOW tip
    OTHERS
      PRINT "Rating not recognised"
    END
*/

function calculateTip(amount, rating) {
    let tip = 0;
    switch (rating.toLowerCase()) {
        case "terrible":
          console.log("Amount of " + amount +", rating of " + rating + ", tip equals: " + tip);
          return tip;
        case "poor":
          tip = Math.ceil(amount * 0.05);
          console.log("Amount of " + amount +", rating of " + rating + ", tip equals: " + tip);
          return tip;
        case "good":
          tip = Math.ceil(amount * 0.1);
          console.log("Amount of " + amount +", rating of " + rating + ", tip equals: " + tip);
          return tip;
        case "great":
          tip = Math.ceil(amount * 0.15);
          console.log("Amount of " + amount +", rating of " + rating + ", tip equals: " + tip);
          return tip;
        case "excellent":
          tip = Math.ceil(amount * 0.2);
          console.log("Amount of " + amount +", rating of " + rating + ", tip equals: " + tip);
          return tip;
        default:
          console.log("Rating " + rating + " not recognised");
          return "Rating not recognised";
    }
  }