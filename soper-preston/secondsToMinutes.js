function humanReadable (seconds) {
  
    //Set variables to convert the seconds to hours minutes and any extra seconds left over
    //hours would be the seconds divided by the sum of 60 * 60
    //minutes would be the seconds divided by the modulas of 60 % 60
    //To get the extra seconds get the modulas of the seconds % 60
    //concat 0 in front of each so that it will have a leading 0 if the number is less than 10
    //return another concat (I love concats lol) of the hours + ":" minutes + ":" + seconds left over
    let hours = ("0" + Math.floor(seconds / (60 * 60))).slice(-2)
    let minutes = ("0" +  Math.floor(seconds / 60 % 60)).slice(-2)
    let extraSeconds = ("0" +  seconds % 60).slice(-2)
    
  //   console.log(hours, minutes, extraSeconds)
    return hours + ":" + minutes + ":" + extraSeconds
  }
  
  //Was having issues with the numbers going through and coming back as super long decimals
  //Looked up and found parseInt which passed through the line and returns an integer
  //Was getting extra 0's on the end, use slice to fix that