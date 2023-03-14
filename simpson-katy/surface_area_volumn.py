def get_size(w,h,d):
    #your code here
    area = 2 * (w * h + w * d + h * d)
    volumn = w * h * d
    return [area, volumn]
    
print(get_size(4, 2, 6)) 
    
    
# area w * h
# volumn w * h * d