def calculate(s):
    # Replace "plus" and "minus" with their respective operators "+"/"-"
    s = s.replace("plus", "+").replace("minus", "-")
    # Evaluate the resulting expression and convert the result to a string
    return str(eval(s))

    # eval() is a built-in Python function that takes a string as an argument and evaluates it as a Python expression.
    #     example, eval("2 + 3") would evaluate to 5
    #COULD BE DANGEROUS TO USE