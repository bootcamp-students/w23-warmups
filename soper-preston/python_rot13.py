def rot13(message):
    alpha = "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM"
    output = ""
    for i in message:     
        if i in alpha:
            index = alpha.index(i)
            output += alpha[alpha.index(i) + 13]
        else:
            output += i
    return output