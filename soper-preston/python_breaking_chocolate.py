def break_chocolate(n, m):
    if n * m == 0:
        return 0
    elif n * m > n * m - 1:
        return n * m - 1