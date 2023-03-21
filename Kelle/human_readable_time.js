function humanReadable (seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds = seconds - (hours * 3600);
    if (hours < 10) {
      hours = '0' + hours
    }
  
  let minutes = Math.floor(seconds / 60);
  seconds = seconds - (minutes * 60);
    if (minutes < 10) {
      minutes = '0' + minutes
    }
  
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  
  return `${hours}:${minutes}:${seconds}`;
}