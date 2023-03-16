def calculate(s):
    # your code here

    # convert operator words to the operator itself
    # run eval method to evaluate the string as an expression
    
    string = s.replace("plus", "+").replace("minus", "-")

    return str(eval(string))