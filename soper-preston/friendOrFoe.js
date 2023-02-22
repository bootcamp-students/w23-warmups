function friend(friends){
    //your code here
    //split the array of strings
    //return each word that is equal to 4 characters then join them back with a , between them
  
    // Code that didn't work but was on the right track
    
    //   const nFriends = friends.slice(", ").filter((f) => {
  //     return f.length === 4;
  //   }).join(",");
   
    
    let nFriends = friends.filter(word => word.length === 4);
    return nFriends;
    };