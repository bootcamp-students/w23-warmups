//split string into individual words
//find length of each word
//loop through and find shortest word
//return the length of the shortest word



function findShort(s){
   return Math.min(...s.split(" ").map(word => word.length));
}   


// function findShort(s){
//   let str = s.split(" ");
//   let a = [];
//   for(let i = 0; i<str.length; i++){
//     a.push(str[i].length);
//   }
//   return Math.min(...a);
// }