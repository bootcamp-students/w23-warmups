def find_short(s):
    splitStr = s.split()
    #print (splitStr)
    lengths = []
    for str in splitStr:
        lengths.append(len(str))

    l = (min(lengths))
    return l
