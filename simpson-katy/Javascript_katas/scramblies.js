//takes in str and loops over the str, adds str to obj as key value pair with value as the count of the character in the string
//{w: 1, o: 1, r: 1, l: 1, d: 1} { r: 1, k: 1, q: 1, o: 1, d: 1, l: 1, w: 1 }
const countStr = (str) => {
    const obj = {};
    for (const char of str) {
        obj[char] = (obj[char] || 0) + 1;
    }
    return obj;
}

//takes in two strs(str1 scrambled, str2 word). Adds them to an array, maps over them and runs them through countStr function.
//object.entries(obj2) turns obj2s key-value pairs into an array with two elements [[w: 1], [o: 1], ...]
//.every checks every obj2 arr against the key of obj1 if the value is greater or equal   
//it then returns either true of false based on result
//basically if there are two of a letter it will be [w: 2], if there are more than 2 w's in your word then the value will no
//longer be greater or equal to and returns false.
function scramble(str1, str2){
    const [obj1, obj2] = [str1, str2].map(countStr);
    
    return (  
        Object.entries(obj2).every(([key, val]) => obj1[key] >= val)
    );
};

console.log(scramble('rkqodlw','world')) //returns true

// function scramble(str1, str2) {
//   let match = [];
//   let splitstr1 = str1.split('');
//   let splitstr2 = str2.split('');
//   for (let i=0; i < splitstr2.length; i++) {
//     for (let j=0; j < splitstr1.length; j++) { 
//       if (splitstr2[i] === splitstr1[j]) {
//         match.push(splitstr1[j]);
//         splitstr1.splice(j, 1);
//         break;
//         }
//       }
//     }
//   let compare = match.join('')
//    if (compare === str2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(scramble('rkqodlw','world'));
// console.log(scramble('cedewaraaossoqqyt','codewars'));
// console.log(scramble('katas','steak'))
// console.log(scramble('scriptjavx','javascript'))


/*
str2 holds the word we are comparing str1 too.
split the strs into arrays
empty variable to store maching letters
loop through the 2nd str.
loop through 1st str and compare
If the letter is found in the 1st str
.pop the letter out of str1 push letter to empty var
if letter is not found the return false.
**maybe convert back to strings.
compare empty var to str2 if equal to str2 return true
*/