def sq_in_rect(lng, wdth):
    if lng == wdth:
        return None

    squares = []
    while lng * wdth > 0:
        size = min(lng, wdth)
        squares.append(size)
        if lng > size:
            lng -= size
        else:
            wdth -= size

    return squares