function spinWords(string){
  return string.split(' ').map(w => w.length < 5 ? w : w.split('').reverse().join('')).join(' ');
}

//sort, if it's >= 5 characters then reverse the charaters and return the array put back together.  

  