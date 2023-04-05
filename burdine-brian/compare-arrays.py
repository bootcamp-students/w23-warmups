def comp(array1, array2):
    if array1 is None or array2 is None:
        return False
    elif len(array1) != len(array2):
        return False
    
    for x in range(len(array1)):
        array1[x] **= 2
    
    array1.sort()
    array2.sort()
    print(array1, array2)
    for x in range(len(array1)):
        if array1[x] != array2[x]:
            return False
    return True
    
"""
    Pseudocode
    start comp
    get array1, array2
    if length of array1 is not equal to length of array2
        return false
    endif
    sort array1, array2
    for each value in array1
        if element squared is not equal to element in array2
            return false
        endif
    endfor
    return true
"""