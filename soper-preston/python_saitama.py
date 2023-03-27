import math

def kill_monsters(health, monsters, damage):
    hits = math.floor((monsters - 1) / 3)
    sDamage = hits * damage
    sHealth = health - sDamage
    
    if sDamage >= health:
        return('hero died')
    else:
        return(f'hits: {hits}, damage: {sDamage}, health: {sHealth}')