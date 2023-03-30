function humanReadable (seconds) {
    let totalMinutes = Math.floor(seconds / 60); //5999
    
    let sec = seconds % 60; //59
    let hours = Math.floor(totalMinutes / 60); //99
    let minutes = totalMinutes % 60; //59
    
    //returns double digits if  needed
    if (sec < 10) {
      sec = '0' +sec;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    
    
    return `${hours}:${minutes}:${sec}`;
  }
  
  
  console.log(humanReadable(359999)); //99:59:59
  console.log(humanReadable(0));
  