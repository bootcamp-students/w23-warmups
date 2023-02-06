//Create using tipScale and an array of the ratings written as lowercase
//if tipscale is less than 0 then the rating will not be recognized
// if it is, then the amount of the bill will be * by tipScale and * by 0.05, the common denomenator of the tip percentages
//Using indexOf to get the correct spot in the array and toLowerCase to make it lowercase to keep the same 

calculateTip = (amount, rating) => (tipScale => tipScale < 0 ? 'Rating not recognised' : Math.ceil(amount * tipScale * .05))
(['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(rating.toLowerCase())) 