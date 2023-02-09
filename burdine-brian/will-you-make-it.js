/*
  Pseudocode
  START
  READ distanceToPump, mpg, fuelLeft
  CALCULATE fuelRequired = distanceToPump / mpg
  IF fuelRequired <= fuelLeft
    SHOW true
  ELSE
    SHOW false
  ENDIF
  END
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    console.log("Fuel left * miles per gallon = " + (mpg * fuelLeft) + ", distance is " + distanceToPump + " miles");
    console.log((distanceToPump / mpg) <= fuelLeft);
    return (distanceToPump / mpg) <= fuelLeft;
  };