def coin_combo(cents):
    print("Cents ", cents)
    quarter = cents // 25
    cents %= 25
    dime = cents // 10
    cents %= 10
    nickel = cents // 5
    penny = cents % 5
    
    return [penny, nickel, dime, quarter]


print(coin_combo(1))
print(coin_combo(6))
print(coin_combo(11))

# divide cents by the type of cents (quarter = 25, dime = 10, nickel = 5, and penny = 1)
# get the math floor (//) of that division.
# Use modulo to grab the remainder of that equation.
# Do that for quarter, dime nickel. 
# The final remainder is pennies.  
# Return each in an array. [p, n, d, q]