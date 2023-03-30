function coinCombo (cents) {
	console.log("Cents:" + cents);
	let q = Math.floor(cents / 25); //how many times 25 goes into cents
	cents = cents % 25; //remainder of cents - q
	let d = Math.floor(cents / 10); //how many times 10 goes into remaining cents
	cents = cents % 10; //remainder of cents - d
	let n = Math.floor(cents / 5); //how many times 5 goes into remaining cents
	let p = cents % 5; // pennies are what remains 
  
	  return [p, n, d, q];
  }
  
  
  console.log(coinCombo(43));
  
  /* Pseudocode:
  You take in a number(cents) that needs to be broken down into change. First, how many quarters go 
  into your number 43 / 25 = 1.72 (use Math.floor to make it whole). After taking one quarter out you 
  have 18 remaining. repeat with dimes and nickles. The remaining cents will be pennies. 
  Create an array to store cents
  */