//Will you make it to the gas station 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//If mpg * fuelLeft is >= distanceToPump then you will make it.  Otherwise you will not.  
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  }
    else {
      return false;
    }
  }
//Test Cases    
  console.log(zeroFuel(50,25,2));
  console.log(zeroFuel(100,50,1));


//const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//return distanceToPump <= mpg * fuelLeft
//};