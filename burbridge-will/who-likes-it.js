function likes(names) {
    // TODO
    if (names.length == 0) {
      //if there is no length of a string, (i.e. no name), return "no one likes this"
      return "no one likes this";
    } else if (names.length == 1) {
      //if there is a string in the array index 1, return "[name] likes this"
      return names[0] + " likes this";
    } else if (names.length == 2) {
      //if theres 2 strings, return "[name] and [name] like this"
      return names[0] + " and " + names[1] + " like this";
    } else if (names.length == 3) {
      //if theres 3 straings, return "[name], [name] and [name] like this"
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }