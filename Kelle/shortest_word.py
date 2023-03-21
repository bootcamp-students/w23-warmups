def find_short(s):
    #split into an array, find length of each word in array, sort and return index 0
        
    l = min(s.split(), key=len)    
    return len(l)