def is_solved(board):
    array =[]
    for row in board:
        for col in row:
            array.append(col)
    return array == [x for x in range(len(board)*len(board))]