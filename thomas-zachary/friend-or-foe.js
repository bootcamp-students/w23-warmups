function friend(friends){
    // Given an array
    // check all names 
    // make new array with only names that equal 4
    console.log(friends);
    let myFriends = friends.filter((f) => {
      console.log(f.length);
      if (f.length === 4) {
        //return f for filter functon
        return f;
      }
     })
    console.log(myFriends);
    // this return for overall functon
    return myFriends;
  }