function likes(names) {
    // TODO
    console.log(names);
    switch (names.length) {
        case 0:
          return 'no one likes this';
        case 1:
          return names[0] + ' likes this';
        case 2:
          return names[0] + ' and ' + names[1] + ' like this';
        case 3:
          return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
        default:
          return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }
  
  /*
    Psuedocode
    START likes
    READ names
    CASE the length of names of
      0: RETURN "no one likes this"
      1: RETURN names[0] " likes this"
      2: RETURN names[0] " and " names[1] " like this"
      3: RETURN names[0] ", " names[1] " and " names[2] " like this"
      4+: RETURN names[0] ", " names[1] " and " (the length of names -2) " others like this"
    END likes
  */