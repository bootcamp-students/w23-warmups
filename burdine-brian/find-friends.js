function friend(friends){
    console.log(friends);
    return friends.filter((friend) => {
      if (friend.length === 4) {
        return friend;
      }
    });
  }
  /*
      Pseudocode
      START friend
      READ friends
      FOR every name in friends
          IF name has a length of 4
              RETURN name
          ENDIF
      ENDFOR
      END friend
  */