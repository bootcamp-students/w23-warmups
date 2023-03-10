function solution(number){
    const NUMERALS = [
      {
        numeral: 'M',
        value: 1000
      },
      {
        numeral: 'CM',
        value: 900
      },
      {
        numeral: 'D',
        value: 500
      },
      {
        numeral: 'CD',
        value: 400
      },
      {
        numeral: 'C',
        value: 100
      },
      {
        numeral: 'XC',
        value: 90
      },
      {
        numeral: 'L',
        value: 50
      },
      {
        numeral: 'XL',
        value: 40
      },
      {
        numeral: 'X',
        value: 10
      },
      {
        numeral: 'IX',
        value: 9
      },
      {
        numeral: 'V',
        value: 5
      },
      {
        numeral: 'IV',
        value: 4
      },
      {
        numeral: 'I',
        value: 1
      }
    ];
    let remainder = number;
    let index = 0;
    let romanNumeral = "";
    while (remainder > 0) {
      if (remainder  >= NUMERALS[index].value) {
        remainder -= NUMERALS[index].value;
        romanNumeral += NUMERALS[index].numeral;
      }
      else {
        index++;
      }
    }
    console.log(number, romanNumeral);
    return romanNumeral;
  }
  
  /*
    Pseudocode
    start solution (what a name)
    get number
    create an array NUMERALS of numeral objects with properties numeral and value, ordered from M to I
    init romanNumeral, set to an empty string
    init remainder, set to number
    init index, set to 0
    while remainder > 0
      if remainder >= the value of NUMERALS at the current index
        subtract the value of NUMERALS at the current index from remainder
        add the numeral of NUMERALS at the current index to romanNumeral
      else (remainder is smaller than the value)
        increment index
      end if
    end while
    return romanNumeral
    end solution
  */
  
  // number
  
  // romanNumeral = ''
  
  // array.map((numeral) => {
  //   if 
  // }).join