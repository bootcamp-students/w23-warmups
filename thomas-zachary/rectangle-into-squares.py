import math
def sq_in_rect(lng, wdth):
#   EDGE CASE, If a perfect square is passed , return None 
    if lng == wdth:
        return None
    
#   from given lengths, subtract a square as big as its shorter side
#   subtract the shorter side length from the bigger side 
#   stop when either length or width are 0
#   otherwise repeat algorithm
    squares = []
    while (lng > 0 and wdth > 0):
        squares.append(lng if lng < wdth else wdth)
        if lng > wdth:
            lng -= wdth
        else: 
            wdth -= lng
        
    return squares