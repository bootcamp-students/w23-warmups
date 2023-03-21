def calculate(s):
    eval_s = s.replace("plus", " + ")
    eval_s = eval_s.replace("minus", " - ")
    print(eval_s)
    total = eval(eval_s)
    print("Total is ", total)
    return str(total)