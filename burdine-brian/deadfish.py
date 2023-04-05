def parse(data):
    value, output = 0, []
    for character in data.lower():
        match character:
            case 'i':
                value += 1
            case 'd':
                value -= 1
            case 's':
                value = value ** 2
            case 'o':
                output.append(value)
    return output

"""
Pseudocode
    start parse
    get data
    init value as 0, output as an empty list
    for character in data (lower case, maybe)
        if character is equal to 'i'
            increment value
        else if character is equal to 'd'
            decrement value
        else if character is equal to 's'
            set value equal to value squared
        else if character is equal to 'o'
            push value into output
        end if
    endfor
    return output
"""