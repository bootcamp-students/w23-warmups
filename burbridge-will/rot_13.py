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
    print(message, rot13_msg)
    return rot13_msg