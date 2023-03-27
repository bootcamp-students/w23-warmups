import math

def kill_monsters(health, monsters, damage):
    hits = math.floor((monsters - 1) / 3)
    #print('hits:', hits)
    damage_taken = hits * damage
    #print('damage_taken:', damage_taken)
    health_left = health - damage_taken
    #print('health_left:', health_left)
    if health_left <= 0:
        return 'hero died'
    else:
        return f"hits: {hits}, damage: {damage_taken}, health: {health_left}"


#You are strong enough to kill monsters with one punch
    #But after you punch 3 times, one of the remaining monsters hits you once
#Your health is health
#Number of monsters is monsters
#Damage that monsters can give you is damage

#Function should calculate how many hits you recieved
    #How much damage you recieved
    #Your remaining health
#if your health is <= 0...you die
    #function should return "hero died"
#all numbers are strictly positive
#function should always return a string
