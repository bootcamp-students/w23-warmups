def break_chocolate(n, m):
#   python
#   given a chocalate bar of (n * m)
#   break into 1 * 1 squares
#   if no breaks necessary return 0
    x = n * m
    if x < 2:
        return 0
    else:
        return x - 1