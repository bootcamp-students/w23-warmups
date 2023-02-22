function highAndLow(numbers){
  console.log(numbers);
  //Splits string (numbers) into array
  let newArray = numbers.split(" ");
  console.log(newArray);
  //Sorts the newArray
  newArray.sort((a,b) => {
    {return a -b};
  })
  console.log(newArray);
  //Returns last index in array concatenated to empty string and first index
  return newArray[newArray.length -1] + " " + newArray[0]; 
}

//Given a string of numbers
//Return the highest number and lowest number
//Output should be 2 numbers, seperated by space
//Highest number should be first

//Split string into array
//Sort values in array from highest to lowest
//Return first index and last index in array
