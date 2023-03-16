def calculate(s):
    # convert "plus" and "minus" to corresponding math operators
    # get numbers out of string and turn to ints,split on "plus" or "minus"?
    # do da maf part
    # eval, reads whatever string is passed as a regular python expression and returns the output,if valid
    s = s.replace("plus", " + ")
    s = s.replace("minus", " - ")    
    return str(eval(s))