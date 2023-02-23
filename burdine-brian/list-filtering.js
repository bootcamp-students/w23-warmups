function filter_list(l) {
    console.log(l);
    let fl = l.filter(item => typeof item != "string");
    console.log(fl);
    return fl;
  }
  
  /*
    Pseudocode
    START
    read array l
    Filter out elements that have a type of 'string', store it in new array fl
    RETURN fl
    END
  */