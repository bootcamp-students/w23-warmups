def comp(array1, array2):
    if type(array1) == list:
        arr1 = [i ** 2 for i in array1]
    else:
        return False
    if type(array2) == list: 
        if sorted(arr1) == sorted(array2): 
            return True
        else:
            return False
    else:
        return False
