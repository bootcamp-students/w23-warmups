function likes(names) {
    //If empty array of names is provided...
    if (names.length == 0) {
      //Return "no one likes this"
      return "no one likes this";
      //Else if array contains 1 name...
    } else if (names.length == 1) {
      //Return "[name] likes this"
      return names[0] + " likes this";
      //Else if array contains 2 names...
    } else if (names.length == 2) {
      //Return "[name] and [name] like this"
      return names[0] + " and " + names[1] + " like this";
      //Else if array contains 3 names...
    } else if (names.length == 3) {
      //Return "[name], [name] and [name] like this"
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
      //Else return "[name], [name] and (2 less than total names provided) others like this"
      return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
}

//Function takes an array
//Array contains names of people that like an item
//Empty array should return "no one likes this"
//One name in array should return "Name likes this"
//Two names in array should return "Name and Name likes this"
//Three names in array should return "Name, Name and Name like this"
//Four or names in array should return "Name, Name and 2 others like this"
