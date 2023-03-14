def get_size(w,h,d):
    #volume = L * W * H
    #area = 2LW + 2LH + 2WH
    answer = []
    answer.append((2 * d * w) + (2 * d * h) + (2 * w * h))
    answer.append(w * h * d)
    return answer