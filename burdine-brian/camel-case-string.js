function toCamelCase(str){
    console.log(str.split(/\-|\_/));
    return (str.split(/\-|\_/)
            .map((word, i) => {
                if (i === 0) {
                  return word;
                } else {
                  console.log(word.charAt(0).toUpperCase() + word.substr(1));
                  return word.charAt(0).toUpperCase() + word.substr(1);
                }
              })
            .join('')
            );
  }
  
  /*
    Pseudocode
    start toCamelCase
    get string
    split string on either '-' or '_'
    capitalize the second word and each word after
    combine string without separators
    return string
    end toCamelCase
  */
  