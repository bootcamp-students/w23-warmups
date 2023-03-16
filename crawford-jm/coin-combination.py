def coin_combo(cents):
    #print(cents)
    coins = []
    quarters = cents // 25
    coins.append(quarters)
    remainder = cents % 25
    #print(coins)
    
    dimes = remainder // 10
    coins.append(dimes)
    remainder = remainder % 10
    #print(coins)
    
    nickels = remainder // 5
    coins.append(nickels)
    remainder = remainder % 5
    
    pennies = remainder
    coins.append(pennies)
    
    coins.reverse()
    return (coins)

#Function takes cents value (int)
#Return minimum number of coins combination of the same value
