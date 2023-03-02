function createPhoneNumber(numbers){
    const areaCode = numbers.slice(0, 3).join('');
    const first = numbers.slice(3, 6).join('');
    const last = numbers.slice(6).join('');
    
    console.log(`(${areaCode}) ${first}-${last}`);
    return `(${areaCode}) ${first}-${last}`;
  }
  
  /*
    Pseudocode
    start createPhoneNumber
    get numbers
    split the first three numbers into a string, call it areaCode
    split the next three numbers into a string, call it first
    split the last four numbers into a string, call it last
    return "(areaCode) first-last" with string concatenation or template literals
    end createPhoneNumber
  */