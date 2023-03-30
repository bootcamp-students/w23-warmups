def calculate(s):
    eval_s = s.replace("plus", " + ")
    eval_s = eval_s.replace("minus", " - ")
    print(eval_s)
    total = eval(eval_s)
    print("Total is ", total)
    return str(total) 

#var for total that will contain running total
# loop through the string. partition based on plus or minus
# index before (num) will be mathed into the total based on partition type (+ or -)