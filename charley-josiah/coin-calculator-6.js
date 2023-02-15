
function coinCombo (cents) {
    let arr = [];
    arr.push(Math.floor(cents/25)) //quarters 25
    cents = cents%25
    arr.push(Math.floor(cents/10))//dimes 10 
    cents = cents%10
    arr.push(Math.floor(cents/5))//nickels 5
    cents = cents%5
    arr.push(Math.floor(cents/1)) //pennies 1
    
    arr = arr.reverse();
    
    
    
    
    return arr;
   
  }
  