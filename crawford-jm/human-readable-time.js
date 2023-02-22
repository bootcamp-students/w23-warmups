function humanReadable (seconds) {
  console.log(seconds);
  let outputHours = Math.floor(seconds / 3600);
  console.log(outputHours);
  let outputMinutes = Math.floor(seconds % 3600 / 60);
  console.log(outputMinutes);
  let outputSeconds = Math.floor(seconds % 3600 % 60);
  console.log(outputSeconds);
  if (outputHours < 10) {
    outputHours = "0" + outputHours;
  }
  if (outputMinutes < 10) {
    outputMinutes = "0" + outputMinutes;
  }
  if (outputSeconds < 10) {
    outputSeconds = "0" + outputSeconds;
  }
  
  return outputHours + ":" + outputMinutes + ":" + outputSeconds;
}

//Function takes seconds as input
//Should return time in human-readable format (HH:MM:SS)
//Maximum time never exceeds 359999 seconds (99:59:59)


//Declare variables for HH MM SS
//Output should be concatenation of "HH" + ":" + "MM" + ":" + "SS"
