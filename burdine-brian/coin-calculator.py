def coin_combo(cents):
    coins = [0, 0, 0, 0]
    while cents > 0:
        if cents >= 25:
            coins[3] = cents // 25
            cents %= 25
        elif cents < 25 and cents >= 10:
            coins[2] = cents // 10
            cents %= 10
        elif cents < 10 and cents >= 5:
            coins[1] = cents // 5
            cents %= 5
        else:
            coins[0] = cents
            cents = 0
    return coins

# Pseudocode
# start coinCombo
# get cents
# init coins as an array with 4 zeroes as entries
# while cents > 0
#   if cents >= 25
#       set the 4th entry of coins (quarters) to the quotient of cents / 25
#       set cents to the remainder of cent / 25
#   else if cents < 25 and cents >= 10
#       set the 3rd entry of coins (dimes) to the quotient of cents / 10
#       set cents to the remainder of cent / 10
#   else if cents < 10 and cents >= 5
#       set the 2nd entry of coins (nickels) to the quotient of cents / 5
#       set cents to the remainder of cent / 5
#   else (cents < 5)
#       set the 1st entry of coins (pennies) to cents
#       set cents to 0
#   endif
# endwhile
# return coins
# end coinCombo