function noSpace(x){
  //look through string
  //IF there is " " remove them//"replace" them
  return x.replace(/\s/g, "" )
  //\s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s (whitespaces)
}