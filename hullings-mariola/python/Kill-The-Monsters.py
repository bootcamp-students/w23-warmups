import math
def kill_monsters(health, monsters, damage):
    hits = math.floor((monsters -1) /3)
    newdamage = hits * damage
    newhealth = health - newdamage
    if (newhealth <= 0):
        return "hero died"
    return (f'hits: {hits}, damage: {newdamage}, health: {newhealth}')