/*
  Pseudocode
  START
  READ cents
  divide cents by 25, SET total as quarters
  divide remainder by 10, SET total as dimes
  divide remainder by 5, SET total as nickels
  SET remainder as value of pennies
  RETURN pennies, nickels, dimes, and quarters
*/
function coinCombo (cents) {
	console.log("Cents: " + cents);
  let quarters = Math.floor(cents / 25);
  cents = cents % 25;
  let dimes = Math.floor(cents / 10);
  cents = cents % 10;
  let nickels = Math.floor(cents / 5);
  let pennies = cents % 5;
  console.log("Quarters: " + quarters + ", Dimes: " + dimes + ", Nickels: " + nickels
             + ", Pennies: " + pennies);
  return [pennies, nickels, dimes, quarters];
}