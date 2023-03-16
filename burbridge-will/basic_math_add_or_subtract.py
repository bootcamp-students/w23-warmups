def calculate(s):
    # your code here
    string = s.replace("plus", "+").replace("minus", "-")
    return str(eval(string))


