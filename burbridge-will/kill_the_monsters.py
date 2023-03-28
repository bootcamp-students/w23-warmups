def kill_monsters(health, monsters, damage):
    hits = (monsters - 1) // 3
    damage_taken = hits * damage
    health_remaining = health - damage_taken

    if health_remaining > 0:
        return f"hits: {hits}, damage: {damage_taken}, health: {health_remaining}"
    else:
        return "hero died"
