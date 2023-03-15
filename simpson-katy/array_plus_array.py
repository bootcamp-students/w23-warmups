def array_plus_array(arr1,arr2):
    list1 = arr1 + arr2
    running_total = 0
    #loop through the list and add each number together
    for item in range(0, len(list1)):
        running_total += list1[item]
        
    return running_total

print(array_plus_array([1, 2, 3], [4, 5, 6]))

