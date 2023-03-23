def create_array(n):
    res=[]
    i=1
    while i<=n: 
        res+=[i]
        i+=1
    return res

# Bug: the value of i doesn't change, so "while i<=n" is either never true or always true