function humanReadable (seconds) {
    console.log(seconds);
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
    console.log(clockHours + ':' + clockMinutes + ':' + clockSeconds);
    return clockHours + ':' + clockMinutes + ':' + clockSeconds;
  }