function findShort(s){
    //split the string into an array 
     //create a new array with the length of the words with .map method
     //return the Math.min which returns the smallest number in the array
     
     let strArray = s.split(" ");
     
     return Math.min(...strArray.map(s => s.length));
     
   }
   
   
   console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
   
   
   /*pseudocode
   turn string into array.split(" ")
   create a varible that hold the number
   loop through the array
   find length of each word
   math.min to find shortest word
   return the number
   */


    //  return Math.min(...s.split(" ").map (s => s.length));