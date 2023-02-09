//Declares variable zeroFuel that takes distanceToPump, mpg, fuelLeft
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //Return mpg times fuel less than or equal distanceToPump
  return mpg * fuelLeft >= distanceToPump;
}
