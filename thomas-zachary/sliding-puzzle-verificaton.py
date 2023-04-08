def is_solved(board):
    start = 0
    for row in board:
        for col in row:
            if col != start:
                return False
            start += 1
    return True
    