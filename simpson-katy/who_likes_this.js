function likes(names) {
    if (names.length === 0) {
      return "no one likes this";
    } else if (names.length === 1) {
      return `${names[0]} likes this`;
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }
  
  console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
  /* Pseudocode:
  function takes in an array of name.
  if (the array is empty) {
  return "no one lines this";
  } else if (arr.length === 1) {
  return name likes this
  } else if arr.length === 2) {
  return arr[0] and arr[1] like this
  } else if (arr.length === 3) {
  return arr[0], arr[1], and arr[2] like this;
  } else {
  return arr[0], arr[1], and (arr.length -2) others like this
  }
  
  */