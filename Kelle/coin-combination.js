function coinCombo (cents) {
  return [cents % 5, Math.trunc(cents % 25 % 10 / 5), Math.trunc(cents % 25 / 10), Math.trunc(cents/25)];
};





// var coinCombo = function(cents) {
//   var quarters = 0;
//   var dimes = 0;
//   var nickels = 0;
//   var pennies = 0;

//   quarters = Math.floor(cents / 25);
//   cents %= 25;

//   dimes = Math.floor(cents / 10);
//   cents %= 10;

//   nickels = Math.floor(cents / 5);
//   cents %= 5;

//   pennies = cents;

//   return [pennies, nickels, dimes, quarters];
// }



// var coinCombo = function(cents) {
// 	return [
//     cents % 25 % 10 % 5,
//     cents % 25 % 10 / 5 | 0,
//     cents % 25 / 10 | 0,
//   	cents / 25 | 0
//   ]
// }

