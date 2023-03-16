def calculate(s):
// #     replace converts plus or minus to operator
    s = s.replace("plus", "+").replace("minus", "-")
// #     eval() allows you to evaluate arbitrary Python expressions from a
// #     string-based or compiled-code-based input
    return str(eval(s))