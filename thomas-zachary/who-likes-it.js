function likes(names) {
    // read names array
    // count array length
    // if names length > 3 ,do "and x others"
    // case (length)
    // 0: No one likes
    // 1: name like this
    // 2: name + name like this
    // 3: name + , + name + and + name like this
    // 4+: name + , name + and name lenght - 2 like this
    let num = names.length;
    console.log(num)
    switch (num){
        case 0:
          return "no one likes this"
          break;
        case 1:
          return names[0] + " likes this"
          break;
        case 2:
          return names[0] + " and " + names[1] + " like this"
          break;
        case 3:
          return names[0] + ", " + names[1] + " and " + names[2] + " like this"
          break;
        default:
          return names[0] + ", " + names[1] + " and " + (num - 2) + " others like this"
          break;
    }
    
  }