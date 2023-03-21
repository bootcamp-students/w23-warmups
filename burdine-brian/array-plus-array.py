def array_plus_array(arr1,arr2):
    arr3 = arr1 + arr2
    sum = 0
    for num in arr3:
        sum += num
    print("Array elements: ", arr3, "Sum: ", sum)
    return sum

# Pseudocode
# Start array_plus_array
# get arr1, arr2
# combine the arrays and store it in arr3
# init sum as 0
# for every number in arr3
#   add number to sum
# endfor
# return sum
# end array_plus_array