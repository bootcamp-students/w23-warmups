def find_short(s):
    # split string into arr
    # declare short word variable that holds len of shortest word
    #loop through arr
    # if arr index is short than shortword variable replace variable
    arr = s.split()
    short = len(arr[0])
    for word in arr:
        if len(word) < short:
            short = len(word)
            
    return short