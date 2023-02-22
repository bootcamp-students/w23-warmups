function friend(friends){
    let f = friends.filter((friend) => {
      return friend.length === 4;
    })
    
    return f;
  }
  
  console.log(friend(["Ryan", "Kieran", "Mark"]));