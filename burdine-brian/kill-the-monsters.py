def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) // 3
    damage_taken = hits * damage
    health_remaining = health - damage_taken
    
    if health_remaining > 0:
        return f"hits: {hits}, damage: {damage_taken}, health: {health_remaining}"
    else:
        return "hero died"
        
# Pseudocode
# start kill_monsters
# get health, monsters, damage
# calculate hits: monsters - 1 // 3
# calculate damage_taken: hits * damage
# calculate health_remaining: health - damage_taken
# if health_remaining > 0
#   return hits, damage, and health_remaining
# else
#   return "hero died"