def comp(array1, array2):
    #if the array1 type is a list
    #square all elements in the first array
    if type(array1) == list:
        arr1 = [i ** 2 for i in array1]
    else:
        return False
    #if the array2 type is a list
    #sort the arrays and compare. If they are equal return true, else return false
    if type(array2) == list: 
        if sorted(arr1) == sorted(array2): 
            return True
        else:
            return False
    else:
        return False
print(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))