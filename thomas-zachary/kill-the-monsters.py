import math
def kill_monsters(health, monsters, damage):
#   health is the hero's health
#   monsters is the number of monsters around
#   damage is how much damage each monster shall inflict
#   calculate damage received and remaining health
#   IF health <= 0 return hero died
#   after you punch 3 monsters, one will hit you once and repeat for 3 more punches
    
    hits = math.ceil((monsters / 3) - 1)
    remaining_h = health - (hits * damage)
    if remaining_h <= 0:
        return "hero died"
    else: 
        return f"hits: {hits}, damage: {hits * damage}, health: {remaining_h}"