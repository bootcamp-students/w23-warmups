def parse(data):
    value = 0
    final = []
    for command in data:
        match command:
            case 'i': 
                value += 1
            case 'd':
                value -= 1
            case 's':
                value = value * value
            case 'o':
                final.append(value)
                
    return final