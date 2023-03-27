function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
      let tip = 0;
      if(rating === "terrible"){
        tip = .00;
      } else if (rating === "poor"){
        tip = .05;
      } else if (rating === "good"){
        tip = .10;
      } else if (rating === "great"){
        tip = .15;
      } else if (rating === "excellent"){
        tip = .20;
    }
    tip = Math.ceil(tip * amount);
    return tip;
    }