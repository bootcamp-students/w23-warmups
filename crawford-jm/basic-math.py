def calculate(s):
    plus = s.replace("plus", "+")
    minus = plus.replace("minus", "-")
    print(minus)
    return (str(eval(minus)))

#Function takes a string of integers and letters
#Return solution of equation
