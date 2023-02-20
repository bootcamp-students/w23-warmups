//Function named coinCombo takes value cents
function coinCombo (cents) {
    //Declares quarters, rounding down to whole number of cents divided by 25
    let quarters = Math.floor(cents / 25);
      cents = cents % 25;
    //Declares Dimes, rounding down to whole number of cents divided by 10
    let dimes = Math.floor(cents / 10);
      //Cents is remainder of 10
      cents = cents % 10;
    //Declares nickels, rounding down to whole number of cents divided by 5
    let nickels = Math.floor(cents / 5);
      //Cents is remainder of 5
      cents = cents % 5;
    //Declares pennies to be remainder of 5
    let pennies = cents % 5;
      //Return each coin in array following execution of coinCombo function
        return [pennies, nickels, dimes, quarters];
    }
    