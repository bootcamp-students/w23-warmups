function coinCombo (cents) {
    //cents arr = []
    //  IF cents >= quarter
    //    arr[3] = Math.floor(cents / quarter)
    //    cents % quarter
    //  IF cents >= dimes
    //    arr[2] = Math.floor(cents / dimes)
    //    cents %= dimes
    //  IF cents >= nickels
    //    arr[1] = Math.floor(cents / nickels)
    //    cents %= nickels
    //  arr[0] = cents
    let cent = [0, 0, 0, 0];
    if (cents >= 25) {
      cent[3] = Math.floor(cents / 25);
      cents %= 25
    }
    if (cents >= 10) {
      cent[2] = Math.floor(cents / 10);
      cents %= 10;
    }
    if (cents >= 5) {
      cent[1] = Math.floor(cents / 5);
      cents %= 5;
    }
    cent[0] = cents
      return cent;
  }