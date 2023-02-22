function humanReadable (seconds) {
    // get input in seconds
    // converts to HH:MM:SS
    // 60 seconds in a minute
    // 60 minutes in an hour
    // output should be concatenation of hours/minutes/seconds with ":" between
    // divide seconds by 60 = get back whole numbers which equal\/
    // minutes then modulo give remaining seconds
    // minutes / 60 = how many hours and modulo is remainig minutes
    // need variables to hold hours and minutes ,maybe seconds?
    // 3600 seconds in an hour
    let hours = Math.floor(seconds / 3600)
    let minutes = Math.floor((seconds % 3600) / 60)
    let secs = Math.floor((seconds % 3600 % 60))
    console.log(hours)
    console.log(minutes)
    console.log(secs)
    if ( hours < 10) {
      hours = "0" + hours
    }
    if ( minutes < 10) {
      minutes = "0" + minutes
    }
    if ( secs < 10) {
      secs = "0" + secs
    }
    return hours + ":" + minutes + ":" + secs
  }