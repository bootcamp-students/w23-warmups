function friend(friends){
  console.log(friends);
  //Variable myFriends filters friends array to find length of each string 
  let myFriends = friends.filter((f) => {
    console.log(f.length);
    //If length of string is strictly equal to 4...
    if (f.length === 4) {
      //Return string
      return f;
    }
  })
  console.log(myFriends);
  //Returns myFriends variable
  return myFriends;
}

//Given an array of names
//Determine string length of each name
//Output names that only have 4 letters
