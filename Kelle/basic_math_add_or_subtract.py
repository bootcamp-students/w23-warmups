def calculate(s):
    # convert plus to + and minus to -
    # convert the string 'numbers' into integers
    # perform regular math, convert the answer to a string
    
    return(str(eval(s.replace('plus', '+').replace('minus', '-'))))