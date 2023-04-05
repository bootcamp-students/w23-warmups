import math
import collections
def comp(array1, array2):
# check to make sure the sqaures appear the same number as the originals in array 1
# loop through array 1
# have dict with key as the value in array1 and Value of the dict be number of times the key appears
# do the same with array2 but squaring them first
# can you compare dicts ?? if so compared ensure all key/value pairs are the same
# cmp() method to compare to two dicts
#     if array1 == None or array2 == None:
#         return False
#     dict1 = {}
#     dict2 = {}
#     for x in array1:
#         y = abs(x)
#         if y not in dict1:
#             dict1[y] = 1
#         else:
#             dict1[y] += 1   
# #     print(dict1)
    
#     for x in array2:
#         y = int(math.sqrt(x))
#         if y not in dict2:
#             dict2[y] = 1
#         else:
#             dict2[y] += 1
#     print(sorted(array1))
#     print(sorted(dict1.items()))
#     print(sorted(array2))
#     print(sorted(dict2.items()))
#     if dict1 == dict2:
#         return True
#     else:
#         return False
    if array1 == None or array2 == None or len(array1) != len(array2):
        return False 
    array1.sort(key=abs)
    array2.sort(key=abs)
    return all(a**2 == b for a, b in zip(array1, array2))
	