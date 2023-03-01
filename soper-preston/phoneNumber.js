function createPhoneNumber(numbers){
    //   console.log(numbers.join(""))
      let numbers1 = numbers.splice(0, 3);
      let numbers2 = numbers.splice(0, 3);
      
    //   console.log(numbers1, numbers2, numbers)
      
      let areaCode = numbers1.join("");
      let cityCode = numbers2.join("");
      let theRest = numbers.join("");
      console.log(areaCode)
      return "(" + areaCode + ") " + cityCode + "-" + theRest;
    }