def rot13(message):
    rot13_msg = ""
    for char in message:
        check_value = ord(char.capitalize())
        if check_value >= 65 and check_value <= 77:
            rot13_msg += chr(ord(char) + 13)
        elif check_value >= 78 and check_value <= 90:
            rot13_msg += chr(ord(char) - 13)
        else:
            rot13_msg += char
    return rot13_msg

"""
Pseudocode
    start rot13
    get message
    init rot13_msg as empty string
    for each character in message
        calculate the ascii value of the letter capitalized
        if ascii value >= 65 and <= 77 (A-M)
            convert the character to ascii value (not capitalized)
            add 13 to value
            convert value to ascii character
            add character to rot13_msg
        if ascii value >= 78 and <= 90 (N-Z)
            convert the character to ascii value (not capitalized)
            subtract 13 from value
            convert value to ascii character
            add character to rot13_msg
        else (character is not an english letter)
            add character to rot13_msg
        endif
    endfor
    return rot13_msg
"""