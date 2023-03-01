function humanReadable (seconds) {
    console.log(seconds)
    let clockSeconds = seconds % 60;
    let clockMinutes = Math.floor(seconds / 60);
    let clockHours = Math.floor(clockMinutes / 60);
    clockMinutes = clockMinutes % 60;
    
    if (clockSeconds < 10) {
      clockSeconds = '0' + clockSeconds;
    }
    if (clockMinutes < 10) {
      clockMinutes = '0' + clockMinutes;
    }
    if (clockHours < 10) {
      clockHours = '0' + clockHours;
    }
    
    console.log(clockHours + ":" + clockMinutes + ":" + clockSeconds);
    return clockHours + ":" + clockMinutes + ":" + clockSeconds;
  }
  
  /*
    Pseudocode
      START humanReadable
      READ seconds
      CALCULATE clockSeconds as the remainder of (seconds / 60)
      CALCULATE minutes as the quotient of (seconds / 60)
      CALCULATE clockMinutes as the remainder of (minutes / 60)
      CALCULATE clockHours as the quotient of (minutes / 60)
      IF clockSeconds is less than 10
          ADD a preceding '0' as a string
      ENDIF
      IF clockMinutes is less than 10
          ADD a preceding '0' as a string
      ENDIF
      IF clockHours is less than 10
          ADD a preceding '0' as a string
      ENDIF
      RETURN clockSeconds, clockMinutes, and clockHours with a ':' between them
      END humanReadable
  */