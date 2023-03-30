def rot13(message):
#     convert char to ascii value
#     depending on if its upper or lower case, subtract correct ascii value for myself
#     add 13 to value, if goes over 25 (because a would be 00 not 01)
#     subtract 26 from it so it loops alphabet
#     add back correct value if letter is uppercase or lower
#     convert ascii value back to what that value represents and then add it to a string

    string = ''
    for letter in message:
        
        if letter.islower():
            char = ord(letter) - 97
            print("first ord", char)
            char += 13
            print("after the add 13", char)
            if char > 25:
                char -= 26
                print("if char over 26", char)
            print("+97", char + 97)
            string += chr(char + 97)
                
        elif letter.isupper():
            char = ord(letter) - 65
            char += 13
            if char > 25:
                char -= 26
            string += chr(char + 65)
        
        else:
            string += letter
    return string
            
