def find_short(s):
    # your code here
    # create a length variable
    # split the string in to a list, assign it to length
    length = s.split()
    # print(length)
    # create l variable, give it a key of len (length) and wrap in the min (function? Might not be what that is called)
    # to return all of the words equal to the smallest word length
    l = min(length, key=len)
    
    # wrap l in len (length) to return how many characters as an integer
    return len(l) # l: shortest word length