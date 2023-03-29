def parse(data):
    num = 0
    answer = []
    for letter in data:
        if letter == 'i':
            num += 1
        elif letter == 'd':
            num -= 1
        elif letter == 's':
            num = num ** 2
        elif letter == 'o':
            answer.append(num)
        else:
            continue
    return answer
    
    
# split the string into an array
# set a var to zero - you will perform calcs on this
# emypty array var - to store when data is o
# loop through the array
# if i then num+1
# elif d num-1
# elif s num squared
# elif o push num to array
# else or all other letters just skip i++
# return the array