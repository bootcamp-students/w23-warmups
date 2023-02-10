remove-string-spaces
/*
  Pseudocode
  START
  READ x
  SHOW x with spaces replaced with empty strings
  END
*/
function noSpace(x){
  console.log(x.replace(/\s/g, ""));
  return x.replace(/\s/g, "");
}