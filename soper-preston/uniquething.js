// All Will, kept my broken code at the bottom

function findUniq(arr) {
    // do magic
    let repeated = arr.filter((item, index) => arr.indexOf(item) !== index); 
    return arr.filter((item)=> item !== repeated[0])[0];
  }
  
  
  // for (let i = 0; index < arr.length; i++) {
  //     const element = array[i];
      
  // }
  
  // return arr.filter((num) => num !== num[0] + 1).push(newArr);