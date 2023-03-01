function filter_list(l) {
    // Return a new array with the strings filtered out
    //for every item in the list,if the type isnt number filter it out
    return l.filter (i => typeof(i) == "number")
  }