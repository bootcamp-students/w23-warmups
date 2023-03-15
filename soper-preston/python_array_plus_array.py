def array_plus_array(arr1,arr2):
    
    #set two variables for both sums
    sum = 0
    sum_two = 0
    
    # loop through each list and add each index together
    for i in range(len(arr1)):    
        sum = sum + arr1[i]; 
        
    for i in range(len(arr2)):    
        sum_two = sum_two + arr2[i]; 
     

    # add both sums
    return sum + sum_two