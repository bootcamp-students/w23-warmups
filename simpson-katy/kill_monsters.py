import math

def kill_monsters(health, monsters, damage):
    hits = 0
    damage_taken = 0
    health_left = health    
    if monsters <= 3:
        return f"hits: {hits}, damage: {damage_taken}, health: {health_left}"
    elif monsters > 3:
        hit = (monsters - 1) / 3
        hits = math.floor(hit)
        damage_taken = damage * hits 
        health_left = health - damage_taken
        if health_left > 0:
            return f"hits: {hits}, damage: {damage_taken}, health: {health_left}" 
        else:
            return "hero died"

print(kill_monsters(50, 7, 10))