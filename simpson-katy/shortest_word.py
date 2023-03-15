def find_short(s):
    # your code here
    splitStr = s.split(" ")
    shortestWord = splitStr[0]
    for word in splitStr:
        if len(word) < len(shortestWord):
            shortestWord = word
    return len(shortestWord) # l: shortest word length


print(find_short("bitcoin take over the world maybe who knows perhaps"))
print(find_short("Lets all go on holiday somewhere very cold"))