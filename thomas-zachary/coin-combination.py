import math
def coin_combo(cents):
    # returns array of penny, nickel, dime, quarter
    # use division and quotient to get how many coins and what remains
    array = [0, 0, 0, 0]
    if cents >= 25:
        array[3] = math.floor(cents / 25)
        cents %= 25
    if cents >= 10:
        array[2] = math.floor(cents / 10)
        cents %= 10
    if cents >= 5:
        array[1] = math.floor(cents / 5)
        cents %= 5
    array[0] = math.floor(cents / 1)
    return array