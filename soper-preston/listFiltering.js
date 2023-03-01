function filter_list(l) {
    // Return a new array with the strings filtered out
    
    // Filter the array to return only numbers and skip the strings
    // Use Number.isInteger (researched for on MDN Docs)
    return l.filter(makeNumber => Number.isInteger(makeNumber))
      
      
  }