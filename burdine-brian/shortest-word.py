def find_short(str):
    words = str.split(" ")
    l = len(words[0])
    for word in words:
        if len(word) < l:
            l = len(word)
    return l 

#    print(str, ", Shortest word length: ", l)
# Pseudocode
# start find_short
# get s
# split s into an array of words
# init l as the length of the first
# for every word in words
#   if the length of word is less than l
#       set l to the length of word
#   end if
# endfor
# return l
# end find_short
# end find_short