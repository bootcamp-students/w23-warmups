# https://www.codewars.com/kata/55466989aeecab5aac00003e/train/python
# Don't understand the answer, not turning in until I do




def sq_in_rect(lng, wdth):
    # your code
    output = []
    area = lng * wdth
    if lng == wdth:
        return None
    while area > 0:
        if lng < wdth:
            output.append(lng)
            wdth = wdth - lng
            area -= lng * lng
        else:
            output.append(wdth)
            lng = lng - wdth
            area -= wdth * wdth
    return output