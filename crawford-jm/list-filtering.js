function filter_list(l) {
    //for every item in the list,if the type isnt number filter it out
    return l.filter (i => typeof(i) == "number")
  }

//Function takes a list of non-negative integers and strings
//Should return a new list
//New list should filter out strings
