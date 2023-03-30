def sq_in_rect(lng, wdth):
    answer = []
    while lng and wdth:
        side = min(lng, wdth)
        answer.append(side)
        if lng == side:
            wdth -= side
        else:
            lng -= side
    if len(answer) > 1:
        return answer
    else:
        return None


# subtract a square as big as its shorter side
# determine the size of the remaining rectangle
# stop when size is 0x0
# otherwise apply algorithm again on the remaining rectangle

# empty list answer = []
# while loop on lng and wdth:
# determine min side
# append that side to list
# if the lng is equal to the side
# then width -= side
# else the length -= side
# return the answer list